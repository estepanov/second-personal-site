import * as React from 'react'
import { graphql } from 'gatsby'
import { Heading, Flex, Box } from 'theme-ui'

import MDX from '../components/MDX'
import Layout from '../layouts'
import TechLogoBox from '../components/projects/TechLogoBox'
import TechLogoList from '../components/projects/TechLogoList'
import { Project } from '../interfaces/Project'
import NextPrev from '../components/projects/NextPrevious'
import ImageGallery from '../components/projects/ImageGallery'
import Banner from '../components/projects/Banners'
import Demos from '../components/projects/Demos'
import ProjectLinks from '../components/projects/ProjectLinks'

interface ProjectProps {
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
    post: Project
    pageContext: {
      next: Project
      previous: Project
    }
  }
  pageContext: {
    next: Project
    previous: Project
  }
}

const ProjectPage: React.FC<ProjectProps> = ({ data, pageContext, location }) => {
  return (
    <Layout
      title={data.post.frontmatter.title}
      description={data.post.excerpt}
      image={
        data.post.frontmatter.images && data.post.frontmatter.images[0]
          ? data.post.frontmatter.images[0].childImageSharp?.resize.src
          : undefined
      }
      pathname={location.pathname}
    >
      <Flex my={1} sx={{ alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Heading as="h1" my={1} sx={{ width: ['100%', 'auto'] }}>
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
      <Flex
        my={1}
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
          backgroundColor: 'muted',
          paddingY: 2,
          paddingX: 1,
          alignItems: ['center'],
          fontSize: 4
        }}
      >
        {data.post.frontmatter.date && (
          <Box sx={{ fontSize: 2, fontWeight: 'bold', width: ['100%', 'auto'], justifyContent: 'flex-start', marginRight: [0, 2] }}>
            <TechLogoBox tag={new Date(data.post.frontmatter.date).getFullYear()} />
          </Box>
        )}
        <Flex sx={{ marginY: [1, 0], fontSize: 4 }}>
          <TechLogoList tags={data.post.frontmatter.tech} marginRight={3} marginBottom={1} />
        </Flex>
        <Flex sx={{ flexGrow: 1 }} />
        <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap', position: 'relative' }}>
          <ProjectLinks marginRight={3} marginBottom={1} repo={data.post.frontmatter.repo} website={data.post.frontmatter.website} />
        </Flex>
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
        website
      }
    }
  }
`
