export interface Images {
  id: string
  publicURL: string
  childImageSharp?: {
    resize: {
      src: string
    }
  }
}

export interface DemoImages {
  id: string
  publicURL: string
}

export enum ProjectSizeEnum {
  small = 'small',
  medium = 'medium'
}

export enum ProjectBannersEnum {
  boilerplate = 'boilerplate',
  hackathon = 'hackathon'
}

export interface Project {
  id: string
  timeToRead: number
  body: string
  excerpt: string
  frontmatter: {
    companyName?: string
    position?: string
    startDate?: string
    endDate?: string
    size: ProjectSizeEnum
    banners?: ProjectBannersEnum[]
    date: string
    title: string
    images: Images[]
    demos: DemoImages[]
    tech: string[]
    repo: string
    website: string
  }
  fields: {
    slug: string
    type: string
  }
}
