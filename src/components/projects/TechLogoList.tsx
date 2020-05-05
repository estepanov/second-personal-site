import React, { useMemo } from 'react'
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
  const sorted = useMemo(() => tags.sort(techSort), [tags])
  const Render = renderItem || TechLogo
  return sorted.map(tag => {
    return <Render tag={tag} key={tag} />
  })
}

export default TechLogoList
