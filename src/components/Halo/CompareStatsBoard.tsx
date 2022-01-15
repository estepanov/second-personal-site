import React from 'react'
import { Box, Button, Flex, Input, Message, Spinner } from "theme-ui"
import { CompareStatsBody, OverviewStats, StatsResponse } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";
import { InputGroup } from "../elements/Form/InputGroup";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { api } from "../../Request";
import { HaloEndPoints } from "../../hooks/useHaloStats";
import { useForm } from "react-hook-form";


const Tile = ({ statKey, stats }: { statKey: OverviewStatsKeys, stats: OverviewStats | null }) => {
  const title = getStatOption(statKey).title
  const value = stats ? getFormattedStat(stats, statKey) : null
  return (
    <Flex sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingY: 2,
      paddingX: 4,
      position: 'relative',
      marginRight: 1,
      marginBottom: 1,
      width: ['45%', '33%', '24%'],
      height: ['100px', '130px'],

    }}>
      <Box sx={{
        backgroundColor: 'background',
        opacity: 0.5,
        zIndex: -1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }} />
      <Flex
        sx={{
          fontFamily: 'nav',
          fontWeight: 'display',
          fontSize: [3, 5],
          color: 'text',
          lineHeight: 1
        }}
      >
        {value}
      </Flex>
      <Flex
        sx={{
          color: 'text',
          textTransform: 'uppercase',
          fontSize: [1, 3],
          letterSpacing: 2,
          textAlign: 'center',
          lineHeight: 1,
          opacity: 0.7
        }}
      >
        {title}
      </Flex>
    </Flex>
  )
}

// interface StatsBoardProps {
//   stats: OverviewStats | null
// }

const TOP_ROW_STATS = [
  OverviewStatsKeys.CoreSummaryKills,
  OverviewStatsKeys.CoreSummaryAssists,
  OverviewStatsKeys.CoreSummaryDeaths,
]

const CompareSchema = yup.object().shape({
  tag1: yup
    .string()
    .required()
    .min(3)
    .max(23)
})

type FormData = {
  tag1: string
}

const CompareStatsBoard = () => {
  const [result, setResult] = useState<CompareStatsBody | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>({
    resolver: yupResolver(CompareSchema)
  })

  const onSubmit = handleSubmit(async ({ tag1 }, e) => {
    if (isSending) return undefined
    setIsSending(false)
    setServerError('')
    try {
      const params = {
        tag: tag1
      }
      const response = await api.get<StatsResponse<CompareStatsBody>>(HaloEndPoints.pvpCompare, { params })
      e?.target.reset()
      setResult(response.data?.data)
      setIsSuccess(true)
    } catch (error) {
      let errorMessage = 'Something went wrong'
      if (error?.response?.data?.message) errorMessage = error.response.data.message
      setIsSuccess(false)
      setServerError(errorMessage)
      console.error(error)
    }
    setIsSending(false)
  })

  return <Box>
    {/* {isSuccess && (
      <Message
        sx={{
          backgroundColor: 'green',
          borderLeftWidth: 0,
          color: 'white',
          marginBottom: 2
        }}
      >
        Success
      </Message>
    )} */}
    {serverError && (
      <Message
        sx={{
          backgroundColor: 'red',
          borderLeftWidth: 0,
          color: 'white',
          marginBottom: 2
        }}
      >
        <b>There was an error trying to fetch the stats:</b> {serverError}
      </Message>
    )}
    <Box
      sx={{
        padding: 3,
        position: 'relative'
      }}
      as="form" onSubmit={onSubmit}>
      <Box
        sx={{
          backgroundColor: 'background',
          opacity: 0.7,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: -1
        }}
      />
      <InputGroup
        disabled={isSending}
        label="Xbox Gamer Tag"
        name="tag1"
        register={register('tag1', { required: true })}
        Component={Input}
        errors={errors}
      />
      <Flex>
        <Button type="submit" disabled={isSending}>
          {isSending ? 'Loading...' : 'Compare'}
        </Button>
        {isSending && <Spinner sx={{ marginLeft: 2 }} />}
      </Flex>
    </Box>
    {result && <>
      <h5>me</h5>
      <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {TOP_ROW_STATS.map(statKey => <Tile key={statKey} statKey={statKey} stats={result.me} />)}
      </Flex>
      <h5>{result.tag.name}</h5>
      <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {TOP_ROW_STATS.map(statKey => <Tile key={statKey} statKey={statKey} stats={result.tag.data} />)}
      </Flex>
    </>}
  </Box>
}

export default CompareStatsBoard;
