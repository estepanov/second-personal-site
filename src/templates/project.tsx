import * as React from 'react'
import { graphql } from 'gatsby'
import { Heading, Flex, Box } from 'theme-ui'

import MDX from '../components/MDX'
import Layout from '../layouts'
import TechLogoBox from '../components/projects/TechLogoBox'
import { Project } from '../interfaces/Project'
import NextPrev from '../components/projects/NextPrevious'
import ImageGallery from '../components/projects/ImageGallery'
import Banner from '../components/projects/Banners'
import Demos from '../components/projects/Demos'

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
    <Layout
      title={data.post.frontmatter.title}
      description={data.post.excerpt}
      image={
        data.post.frontmatter.images && data.post.frontmatter.images[0]
          ? data.post.frontmatter.images[0].childImageSharp?.resize.src
          : undefined
      }
    >
      <Flex my={1} sx={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Heading as="h1" color="secondary" my={1} sx={{ width: ['100%', 'auto'] }}>
          {data.post.frontmatter.title}
        </Heading>
        {data.post.frontmatter.banners ? (
          <>
            <Box sx={{ marginRight: [0, 4] }} />
            {data.post.frontmatter.banners.map(item => (
              <Banner key={item} type={item} />
            ))}
          </>
        ) : null}
      </Flex>
      <Flex my={1} sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {data.post.frontmatter.date && <TechLogoBox tag={new Date(data.post.frontmatter.date).getFullYear()} />}
        {data.post.frontmatter.tech.map(tag => {
          return <TechLogoBox key={tag} tag={tag} />
        })}
      </Flex>
      <Demos items={data.post.frontmatter.demos} />
      <ImageGallery items={data.post.frontmatter.images} />
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
        banners
        date
        tech
        title
        demos {
          id
          publicURL
        }
        images {
          id
          publicURL
          childImageSharp {
            resize(height: 300, width: 300, cropFocus: NORTH) {
              src
            }
          }
        }
        repo
      }
    }
  }
`
