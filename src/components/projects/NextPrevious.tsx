import React from 'react'
import { darken, alpha, lighten } from '@theme-ui/color'

/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'

interface CardProps {
  title: string
  slug: string
  isNext?: boolean
}

const Card: React.FC<CardProps> = ({ title, slug, isNext = false }) => {
  if (!title || !slug) return null
  return (
    <Link
      to={slug}
      sx={{
        display: 'flex',
        // flexDirection: 'row',
        color: 'gray',
        flexDirection: isNext ? 'row-reverse' : 'row',
        // backgroundColor: 'gray',
        // backgroundImage: t => `linear-gradient(to bottom, ${darken('gray', 0.1)(t)}, ${lighten('gray', 0.1)(t)})`,
        // borderStyle: 'solid',
        // borderColor: 'gray',
        // borderWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'muted',
        borderTopWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'muted',
        borderBottomWidth: 1,
        marginY: 2,
        paddingY: 2,
        // paddingX: 2,
        textDecoration: 'none',
        transition: 'ease-in-out 0.3s',

        '& svg': {
          transform: 'scale(1)',
          transition: 'ease-in-out 0.3s',
          color: 'mutedText'
        },
        '&:hover': {
          borderBottomColor: 'text',
          borderTopColor: 'text',

          // color: 'text',
          // backgroundColor: 'background',
          // backgroundImage: 'none'
          color: 'text',
          h3: {
            textDecoration: 'underline'
          },
          '& svg': {
            color: 'text',
            transform: 'scale(1.4)'
          }
        }
      }}
    >
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 4,
          paddingX: 3
        }}
      >
        <span className={isNext ? 'fal fa-angle-right' : 'fal fa-angle-left'} />
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: isNext ? 'flex-end' : 'flex-start',
          paddingRight: isNext ? 0 : 3,
          paddingLeft: !isNext ? 0 : 3
        }}
      >
        <Text sx={{ fontSize: 0, marginBottom: 0, color: 'mutedText' }}>{isNext ? 'Next' : 'Previous'} project</Text>
        <Heading as="h3" sx={{ fontSize: 2 }}>
          {title}
        </Heading>
      </Flex>
    </Link>
  )
}

const NextPrevious: React.FC = ({ next, previous }) => {
  return (
    <Flex
      sx={{
        marginY: 2,
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between'
      }}
    >
      {previous ? <Card slug={previous.fields.slug} title={previous.frontmatter.title} /> : <Box />}
      {next && <Card isNext slug={next.fields.slug} title={next.frontmatter.title} />}
    </Flex>
  )
}

export default NextPrevious
