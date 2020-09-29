type TechTagIncludes = number | string | TechTypes | TechRunTimeEnv

export interface TechTag {
  order: number
  name: string
  color: string
  icon: React.ReactFragment
  type: TechTypes
  language?: string
  environment?: TechRunTimeEnv
  includes?: TechTagIncludes[]
}

export interface TagMap {
  [key: string]: TechTag
}

export enum TechTypes {
  language = 'Languages',
  database = 'Databases',
  framebrary = 'Frameworks & Libraries', // library OR framework
  runtime = 'Runtimes',
  testing = 'Testing',
  devops = 'DevOps',
  deployment = 'Deployments'
}

export enum TechRunTimeEnv {
  backend = 'Backend',
  frontend = 'Frontend'
}
