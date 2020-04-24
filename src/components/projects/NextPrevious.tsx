import React from 'react'
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
        flexDirection: 'column',
        alignItems: isNext ? 'flex-end' : 'flex-start',
        color: 'background',
        backgroundColor: 'gray',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
        marginY: 2,
        paddingY: 2,
        paddingX: 2,
        textDecoration: 'none',
        '&:hover': {
          color: 'text',
          backgroundColor: 'background'
        }
      }}
    >
      <Text sx={{ fontSize: 0, marginBottom: 1 }}>{isNext ? 'Next' : 'Previous'} project</Text>
      <Heading sx={{ fontSize: 2 }}>{title}</Heading>
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
