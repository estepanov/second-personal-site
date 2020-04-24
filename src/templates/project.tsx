import * as React from 'react'
import { graphql } from 'gatsby'
import { Heading, Flex, Text } from 'theme-ui'

import MDX from '../components/MDX'
import Layout from '../layouts'
import TechLogoBox from '../components/projects/TechLogoBox'
import { Project } from '../interfaces/Project'
import NextPrev from '../components/projects/NextPrevious'

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
    pageContext: {
      next: Project
      previous: Project
    }
  }
}

const ProjectPage: React.FC<ProjectProps> = ({ data, pageContext }) => {
  return (
    <Layout>
      <Heading as="h1" color="secondary">
        {data.post.frontmatter.title}
      </Heading>
      <Flex my={2} sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {data.post.frontmatter.date && <TechLogoBox tag={new Date(data.post.frontmatter.date).getFullYear()} />}
        {data.post.frontmatter.tech.map(tag => {
          return <TechLogoBox key={tag} tag={tag} />
        })}
      </Flex>
      <MDX>{data.post.body}</MDX>
      <NextPrev next={pageContext.next} previous={pageContext.previous} />
    </Layout>
  )
}

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
        date
        tech
        title
      }
    }
  }
`
