import * as React from 'react'
import { graphql } from 'gatsby'
import { Heading, Flex, Box, Image } from 'theme-ui'
import dayjs from 'dayjs'
import MDX from '../components/MDX'
import TechLogoBox from '../components/projects/TechLogoBox'
import TechLogoList from '../components/projects/TechLogoList'

import Layout from '../layouts'
import { BlogPost } from '../interfaces/BlogPost'

interface BlogPostPageTemplateProps {
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
    post: BlogPost
  }
}

const BlogPostPageTemplate: React.FC<BlogPostPageTemplateProps> = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <Heading as="h1" my={1} sx={{ width: ['100%', 'auto'] }}>
      {data.post.frontmatter.title}
    </Heading>
    <Flex
      sx={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'muted', paddingY: 2, paddingX: 1, alignItems: 'center', fontSize: 4 }}
    >
      <Box sx={{ fontSize: 2, fontWeight: 'bold', width: ['100%', 'auto'], justifyContent: 'flex-start', marginRight: [0, 2] }}>
        {data.post.frontmatter.date && <TechLogoBox tag={dayjs(data.post.frontmatter.date).format('MMMM D YYYY')} />}
      </Box>
      <Flex sx={{ fontSize: 4 }}>
        <TechLogoList tags={data.post.frontmatter.tech || []} marginRight={3} marginBottom={1} />
      </Flex>
    </Flex>
    {data.post?.frontmatter?.banner?.publicURL && (
      <Image
        src={data.post.frontmatter.banner.publicURL}
        sx={{
          objectFit: 'cover',
          paddingY: 3
        }}
      />
    )}
    <MDX>{data.post.body}</MDX>
  </Layout>
)

export default BlogPostPageTemplate

export const query = graphql`
  query BlogPostPageTemplateQuery($slug: String!) {
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
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        tech
        date
        banner {
          id
          publicURL
        }
      }
    }
  }
`
