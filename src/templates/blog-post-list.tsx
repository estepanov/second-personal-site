import * as React from 'react'
import { graphql } from 'gatsby'
// import MDX from '../components/MDX'

import { Flex, Text } from 'theme-ui'
import Layout from '../layouts'
import { BlogPost } from '../interfaces/BlogPost'
import BlogPostListItem from '../components/blog/BlogPostListItem'
import HR from '../components/elements/HR'
import SectionHeader from '../components/Layout/SectionHeader'

interface BlogPostListPageTemplateProps {
  location: Location
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    posts: {
      nodes: BlogPost[]
    }
  }
}

const BlogPostListPageTemplate: React.FC<BlogPostListPageTemplateProps> = ({ data, location }) => {
  return (
    <Layout pathname={location.pathname}>
      <SectionHeader title="Blog" subtitle="A collection of random musings" />
      {data.posts.nodes && data.posts.nodes.length ? (
        data.posts.nodes.map((post, ind) => {
          return (
            <React.Fragment key={post.id}>
              <HR />
              <BlogPostListItem post={post} />
              {ind + 1 === data.posts.nodes.length && <HR />}
            </React.Fragment>
          )
        })
      ) : (
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <Text>content is coming soon!</Text>
          </Flex>
        )}
    </Layout>
  )
}
export default BlogPostListPageTemplate

export const query = graphql`
  query BlogPostListPageTemplateQuery($skip: Int!, $limit: Int!) {
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

    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          date
          permalink
        }
        fields {
          date
          slug
        }
        id
        timeToRead
      }
    }
  }
`
