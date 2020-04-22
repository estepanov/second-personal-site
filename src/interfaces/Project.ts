export interface Images {
  id: string
  publicURL: string
}

export interface Project {
  id: string
  timeToRead: number
  body: string
  excerpt: string
  frontmatter: {
    date: string
    title: string
    images: Images[]
    tech: string[]
  }
  fields: {
    slug: string
  }
}
