import React from 'react'

import ElectronLogo from './Electron'
import Postgres from './Postgres'
import Redis from './Redis'
import Firebase from './Firebase'
import Redux from './Redux'
import TypeScript from './TypeScript'
import JavaScript from './JavaScript'
import Heroku from './Heroku'
import AWS from './AWS'
import Azure from './Azure'
import ReactNative from './ReactNative'
import MongoDB from './MongoDB'
import Express from './Express'
import MobxStateTree from './MobxStateTree'
import NextJs from './NextJs'
import Parse from './Parse'
import Sequelize from './Sequelize'
import Gatsby from './Gatsby'
import GraphQL from './GraphQL'
import Python from './Python'
import Docker from './Docker'

import { TechTag, TagMap, TechTypes, TechRunTimeEnv } from '../../interfaces/TechTag'

const TAG_MAP: TagMap = {
  python: {
    order: 0,
    name: 'Python',
    type: TechTypes.language,
    color: '#0277BD',
    icon: <Python />
  },
  node: {
    order: 0,
    name: 'Node',
    color: '#69bd47',
    type: TechTypes.runtime,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <i className="fab fa-node" />
  },
  express: {
    order: 2,
    name: 'Express',
    color: '#000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Express />
  },
  javascript: {
    order: 0,
    name: 'JavaScript',
    color: '#ffd603',
    type: TechTypes.language,
    icon: <JavaScript />
    // icon: <i className="fab fa-js" />
  },
  typescript: {
    order: 0,
    name: 'TypeScript',
    type: TechTypes.language,
    color: '#294e80',
    icon: <TypeScript />
  },
  react: {
    order: 1,
    name: 'React',
    color: '#60dafb',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <i className="fab fa-react" />
  },
  nextjs: {
    order: 1,
    name: 'Next.js',
    color: '#000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <NextJs />
  },
  gatsby: {
    order: 1,
    name: 'Gatsby',
    color: '#639',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Gatsby />
  },
  graphql: {
    order: 1,
    name: 'GraphQL',
    color: '#e10098',
    type: TechTypes.language,
    icon: <GraphQL />
  },
  'react-native': {
    order: 1,
    name: 'React Native',
    color: '#000000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ReactNative />
  },
  redux: {
    order: 2,
    name: 'Redux',
    color: '#7e57c2',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Redux />
  },
  electron: {
    order: 2,
    name: 'Electron',
    color: '#2B2E3A',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ElectronLogo />
  },
  postgres: {
    order: 1,
    name: 'PostgreSQL',
    color: '#32668f',
    type: TechTypes.database,
    environment: TechRunTimeEnv.backend,
    icon: <Postgres />
  },
  mongodb: {
    order: 1,
    name: 'MongoDB',
    color: '#4caf50',
    type: TechTypes.database,
    environment: TechRunTimeEnv.backend,
    icon: <MongoDB />
  },
  redis: {
    order: 1,
    name: 'Redis',
    type: TechTypes.database,
    environment: TechRunTimeEnv.backend,
    color: '#d92a21',
    icon: <Redis />
  },
  firebase: {
    order: 2,
    name: 'Firebase',
    color: '#ff8f00',
    type: TechTypes.database,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Firebase />
  },
  'styled-components': {
    order: 2,
    name: 'styled-components',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    color: '#da9a62',
    icon: <>💅</>
  },
  'mobx-state-tree': {
    order: 2,
    name: 'Mobx-State-Tree',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    color: '#ff7102',
    icon: <MobxStateTree />
  },
  css3: {
    order: 2,
    name: 'CSS3',
    type: TechTypes.language,
    color: '#2168ed',
    icon: <i className="fab fa-css3-alt" />
  },
  html5: {
    order: 2,
    name: 'HTML5',
    type: TechTypes.language,
    color: '#e44e27',
    icon: <i className="fab fa-html5" />
  },
  heroku: {
    order: 2,
    name: 'Heroku',
    color: '#7e57c2',
    type: TechTypes.deployment,
    icon: <Heroku />
  },
  aws: {
    order: 2,
    name: 'Amazon Web Services',
    color: '#252f3e',
    type: TechTypes.deployment,
    icon: <AWS />
  },
  azure: {
    order: 2,
    name: 'Azure',
    color: '#035bda',
    type: TechTypes.deployment,
    icon: <Azure />
  },
  parse: {
    order: 4,
    name: 'Parse.js',
    color: '#169cee',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Parse />
  },
  sequelize: {
    order: 1,
    name: 'Sequelize',
    color: '#03afef',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Sequelize />
  },
  docker: {
    order: 1,
    name: 'Docker',
    color: '#394d54',
    type: TechTypes.devops,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Docker />
  }
}

export default TAG_MAP

export const techTagFilter: TechTag[] = (list: TechTag[], field: string, value: string) => {
  return list.filter(tag => {
    const data = TAG_MAP[tag]
    if (!data) return false
    return data[field] === value
  })
}
