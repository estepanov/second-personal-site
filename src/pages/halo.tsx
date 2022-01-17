import React, { useState } from 'react'
/** @jsx jsx */
import { Box, jsx, Message } from 'theme-ui'
import Layout from '../layouts'
import Container from '../components/Layout/Container'
import useHaloStats, { HaloEndPoints } from '../hooks/useHaloStats'
import { CompareStatsBody, OverviewStats, StatsResponse } from '../interfaces/Halo/Stats'
import CompareStatsBanner from '../components/Halo/CompareStatsBanner'
import CompareForm from '../components/Halo/CompareForm'
import { api } from '../Request'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import useToggle from '../hooks/useToggle'
import SoloStatsBoard from '../components/Halo/SoloStatsBoard'
import CompareStatsBoard from '../components/Halo/CompareStatsBoard'
import { OverviewStatsKeys } from '../utils/haloStatFormatter'

const STAT_KEYS = [
  OverviewStatsKeys.CoreSummaryKills,
  OverviewStatsKeys.CoreSummaryAssists,
  OverviewStatsKeys.CoreSummaryDeaths,
  OverviewStatsKeys.CoreSummaryBetrayals,
  OverviewStatsKeys.CoreSummaryMedals,
  OverviewStatsKeys.CoreSummarySuicides,
  OverviewStatsKeys.CoreSummaryVehiclesDestroys,
  OverviewStatsKeys.CoreSummaryVehiclesHijacks,
  OverviewStatsKeys.CoreBreakdownsKillsMelee,
  OverviewStatsKeys.CoreBreakdownsKillsGrenades,
  OverviewStatsKeys.CoreBreakdownsKillsHeadshots,
  OverviewStatsKeys.CoreBreakdownsKillsPowerWeapons,
  OverviewStatsKeys.CoreBreakdownsMatchesWins,
  OverviewStatsKeys.CoreBreakdownsMatchesLosses,
  OverviewStatsKeys.CoreBreakdownsMatchesLeft,
  OverviewStatsKeys.CoreBreakdownsMatchesDraws,
  OverviewStatsKeys.CoreDamageTaken,
  OverviewStatsKeys.CoreDamageDealt,
  OverviewStatsKeys.CoreDamageAverage,
  OverviewStatsKeys.CoreShotsFired,
  OverviewStatsKeys.CoreShotsLanded,
  OverviewStatsKeys.CoreShotsMissed,
  OverviewStatsKeys.CoreShotsAccuracy,
  OverviewStatsKeys.CoreDamageTaken,
  OverviewStatsKeys.CoreBreakdownsAssistsCallouts,
  OverviewStatsKeys.CoreBreakdownsAssistsDriver,
  OverviewStatsKeys.CoreBreakdownsAssistsEmp,
  OverviewStatsKeys.MatchesPlayed,
  OverviewStatsKeys.WinRate,
  OverviewStatsKeys.CoreKDA,
  OverviewStatsKeys.CoreKDR,
  OverviewStatsKeys.CoreTotalScore,
  OverviewStatsKeys.TimePlayedSeconds,
]

const CompareSchema = yup.object().shape({
  tag1: yup
    .string()
    .required()
    .min(3)
    .max(20)
})

type FormData = {
  tag1: string
}

interface HaloPageProps {
  location: Location
}

const HaloPage = ({ location }: HaloPageProps) => {
  const [compareMode, toggleCompareMode] = useToggle(false);
  const [meStats, meStatsLoading] = useHaloStats<OverviewStats>(HaloEndPoints.overview)

  const [result, setResult] = useState<CompareStatsBody | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>({
    resolver: yupResolver(CompareSchema)
  })

  const onSubmit = handleSubmit(async ({ tag1 }, e) => {
    if (isSending) return undefined
    setIsSending(true)
    setServerError('')
    try {
      const params = {
        tag: tag1
      }
      const response = await api.get<StatsResponse<CompareStatsBody>>(HaloEndPoints.pvpCompare, { params })
      // e?.target.reset()
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

  return (
    <>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          backgroundImage: 'url(/halo-infinite-chief-helmet.jpeg)',
          height: '100vh',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -3,
          opacity: 0.5
        }}
      />
      <Layout wrapped={true} container={false} pathname={location.pathname}>
        <CompareStatsBanner expanded={compareMode} toggle={toggleCompareMode}>
          {serverError && (
            <Message
              sx={{
                backgroundColor: 'red',
                borderLeftWidth: 0,
                color: 'white',
                marginBottom: 2,
                borderRadius: 0,
              }}
            >
              <b>There was an error trying to fetch the stats:</b> {serverError}
            </Message>
          )}
          <CompareForm
            register={register}
            errors={errors}
            disabled={isSending}
            loading={isSending}
            onSubmit={onSubmit}
          />
        </CompareStatsBanner>
        <Container>
          {compareMode ?
            <CompareStatsBoard
              statKeys={STAT_KEYS}
              loading={isSending}
              stats={result}
            /> :
            <SoloStatsBoard
              statKeys={STAT_KEYS}
              stats={meStats}
              loading={meStatsLoading}
            />}
        </Container>
      </Layout>
    </>

  )
}

export default HaloPage
