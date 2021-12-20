import React from 'react'

import { Project } from '../../interfaces/Project'
import WorkSquareListItem from '../WorkSquareListItem'

interface Props {
  project: Project
}

const WorkListItem: React.FC<Props> = ({ project }) => {
  const startDate = new Date(project.frontmatter.startDate)
  const endDate = new Date(project.frontmatter.endDate)
  return (
    <WorkSquareListItem
      size={project.frontmatter.size}
      images={project.frontmatter.images}
      tech={project.frontmatter.tech}
      startDate={project.frontmatter.startDate ? `${startDate.getMonth() + 1}/${startDate.getFullYear()}` : undefined}
      endDate={project.frontmatter.endDate ? `${endDate.getMonth() + 1}/${endDate.getFullYear()}` : undefined}
      excerpt={project.excerpt}
      banners={project.frontmatter.banners}
      companyName={project.frontmatter.companyName as string}
      position={project.frontmatter.position}
    />
  )
}

export default WorkListItem
