import React from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'

import TechLogo from './TechLogo'
import ListImages from './ListImages'

import { Project } from '../../interfaces/Project'

interface Props {
  project: Project
}

const ProjectListItem: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={project.fields.slug}
      sx={{
        color: 'listContent',
        textDecoration: 'none',
        position: 'relative'
      }}
    >
      <Box
        my={2}
        p={3}
        sx={{
          overflow: 'hidden',
          backgroundColor: 'listBg',
          transition: 'ease-in 0.3s',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.025)',
            backgroundColor: 'listBgAlt',
            h1: {
              color: 'primary'
            }
          }
        }}
      >
        <Flex
          sx={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
        >
          <Flex
            sx={{
              minWidth: 300,
              flex: 1,
              flexShrink: 0,
              flexDirection: 'column'
            }}
          >
            <Heading as="h1" my={2} sx={{ fontSize: 3, color: 'listHeader' }}>
              {project.frontmatter.title}
            </Heading>
            <Text sx={{ fontSize: 1 }}>{project.excerpt}</Text>
            <Flex my={2} sx={{ flexDirection: 'row' }}>
              {project.frontmatter.tech.map(tag => {
                return <TechLogo tag={tag} key={tag} />
              })}
            </Flex>
          </Flex>
          <ListImages items={project.frontmatter.images} />
        </Flex>
      </Box>
    </Link>
  )
}

export default ProjectListItem
