export interface TechTag {
  order: number
  name: string
  color: string
  icon: React.ReactFragment
}

export interface TagMap {
  [key: string]: TechTag
}
