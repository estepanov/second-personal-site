import React from 'react'
import { graphql } from 'gatsby'

/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui'
import Layout from '../layouts'

import Container from '../components/Layout/Container'

interface IndexProps {
  location: Location
}

const BooksPage: React.FC<IndexProps> = ({ data, location }) => {
  console.log('datadatadata', data)
  return (
    <Layout container={false} pathname={location.pathname}>
      <Container>Hello</Container>
    </Layout>
  )
}

export const query = graphql`
  query BooksPageTemplateQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }

    allBooks: allGoodreadsShelf {
      nodes {
        id
        shelfName
        reviews {
          book {
            title
            bookID
          }
        }
      }
    }
  }
`

export default BooksPage
