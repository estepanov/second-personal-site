import { ProjectSizeEnum, Images, ProjectBannersEnum } from './Project'

export interface BlogPost {
  id: string
  excerpt?: string
  timeToRead?: number
  // tableOfContents?: {} // tbd
  body?: Function
  frontmatter: {
    title: string
    permalink: string
    banner: Images
    banners?: ProjectBannersEnum[]
    languages: null | string[]
    tech: null | string[]
    images: Images[]
    size: ProjectSizeEnum
  }
  fields: {
    slug: string
    date: Date
  }
}
