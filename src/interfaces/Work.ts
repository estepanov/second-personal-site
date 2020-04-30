export interface Images {
  id: string
  publicURL: string
  childImageSharp?: {
    resize: {
      src: string
    }
  }
}

export interface Work {
  id: string
  excerpt: string
  frontmatter: {
    banners?: ProjectBannersEnum[]
    startDare: string
    endDate: string
    // images: Images[]
    website: string
    companyName: string
    position: string
    languages: string[]
  }
}
