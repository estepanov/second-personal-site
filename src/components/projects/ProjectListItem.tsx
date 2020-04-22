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
        padding: [2, 3],
        my: 2,
        color: 'listContent',
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        overflow: 'hidden',
        transition: 'ease-in 0.3s',
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.025)',
          h1: {
            color: 'secondary'
          }
        }
      }}
    >
      <Flex
        sx={{
          minWidth: 200,
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
          {project.frontmatter.date && <TechLogo tag={new Date(project.frontmatter.date).getFullYear()} />}

          {project.frontmatter.tech.map(tag => {
            return <TechLogo tag={tag} key={tag} />
          })}
        </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexShrink: 0,
          alignItems: 'center'
        }}
      >
        <ListImages items={project.frontmatter.images} />
      </Flex>
    </Link>
  )
}

export default ProjectListItem
