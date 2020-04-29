export interface Images {
  id: string
  publicURL: string
  childImageSharp?: {
    resize: {
      src: string
    }
  }
}

export enum ProjectSizeEnum {
  small = 'small',
  medium = 'medium'
}

export enum ProjectBannersEnum {
  hackathon = 'hackathon'
}

export interface Project {
  id: string
  timeToRead: number
  body: string
  excerpt: string
  frontmatter: {
    size: ProjectSizeEnum
    banners?: ProjectBannersEnum[]
    date: string
    title: string
    images: Images[]
    tech: string[]
    repo: string
  }
  fields: {
    slug: string
  }
}
