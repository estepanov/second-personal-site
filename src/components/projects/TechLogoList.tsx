import React from 'react'
import TechLogo from './TechLogo'

import TAG_MAP from '../logos/constants'

interface TechLogoListProps {
  tags: string[]
  renderItem?: React.ReactNode
}

const techSort = (a: string, b: string) => {
  const left = TAG_MAP[a] || {}
  const right = TAG_MAP[b] || {}
  return left.order - right.order
}

const TechLogoList: React.FC<TechLogoListProps> = ({ tags, renderItem }) => {
  const Render = renderItem || TechLogo
  return tags.sort(techSort).map(tag => {
    return <Render tag={tag} key={tag} />
  })
}

export default TechLogoList
