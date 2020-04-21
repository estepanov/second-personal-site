import * as React from 'react'
import { graphql } from 'gatsby'
import { Heading, Flex } from 'theme-ui'

import MDX from '../components/MDX'
import Layout from '../layouts'
import TechLogoBox from '../components/projects/TechLogoBox'
import { Project } from '../interfaces/Project'

interface ProjectProps {
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
    post: Project
  }
}

const ProjectPage: React.FC<ProjectProps> = ({ data }) => (
  <Layout>
    <Heading as="h1" color="secondary">
      {data.post.frontmatter.title}
    </Heading>
    <Flex my={2} sx={{ flexDirection: 'row' }}>
      {data.post.frontmatter.tech.map(tag => {
        return <TechLogoBox key={tag} tag={tag} />
      })}
    </Flex>
    <MDX>{data.post.body}</MDX>
  </Layout>
)

export default ProjectPage

export const query = graphql`
  query ProjectQuery($slug: String!) {
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
        tech
        title
      }
    }
  }
`
