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
import Mongoose from './Mongoose'
import SocketIO from './SocketIO'
import Node from './Node'
import Sass from './Sass'
import Angular from './Angular'

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
    icon: <Node />
  },
  express: {
    order: 3,
    name: 'Express.js',
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
  angular: {
    order: 3,
    name: 'Angular',
    color: '#e23237',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Angular />
  },
  react: {
    order: 2,
    name: 'React',
    color: '#60dafb',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <i className="fab fa-react" />
  },
  nextjs: {
    order: 2.1,
    name: 'Next.js',
    color: '#000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <NextJs />
  },
  gatsby: {
    order: 2.2,
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
    order: 2.3,
    name: 'React Native',
    color: '#000000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ReactNative />
  },
  redux: {
    order: 3,
    name: 'Redux',
    color: '#7e57c2',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Redux />
  },
  electron: {
    order: 2.3,
    name: 'Electron',
    color: '#2B2E3A',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ElectronLogo />
  },
  postgres: {
    order: 1.1,
    name: 'PostgreSQL',
    color: '#32668f',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    icon: <Postgres />
  },
  mongodb: {
    order: 1,
    name: 'MongoDB',
    color: '#4caf50',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    icon: <MongoDB />
  },
  redis: {
    order: 1.2,
    name: 'Redis',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    color: '#d92a21',
    icon: <Redis />
  },
  firebase: {
    order: 4,
    name: 'Firebase',
    color: '#ff8f00',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Firebase />
  },
  'styled-components': {
    order: 3,
    name: 'styled-components',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    color: '#da9a62',
    icon: <>💅</>
  },
  sass: {
    order: 3,
    name: 'SASS',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    color: '#cf649a',
    icon: <Sass />
  },
  'mobx-state-tree': {
    order: 3,
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
    order: 4,
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
    order: 4,
    name: 'Azure',
    color: '#035bda',
    type: TechTypes.deployment,
    icon: <Azure />
  },
  parse: {
    order: 3,
    name: 'Parse.js',
    color: '#169cee',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Parse />
  },
  sequelize: {
    order: 3,
    name: 'Sequelize',
    color: '#03afef',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Sequelize />
  },
  mongoose: {
    order: 3,
    name: 'Mongoose',
    color: '#880000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Mongoose />
  },
  docker: {
    order: 5,
    name: 'Docker',
    color: '#394d54',
    type: TechTypes.devops,
    language: 'javascript',
    icon: <Docker />
  },
  socketio: {
    order: 4,
    name: 'Socket.io',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    color: '#010101',
    icon: <SocketIO />
  }
}

export default TAG_MAP

export const techTagFilter = (field: string, value: string) => {
  return (tag: TechTag) => {
    const fullTag = TAG_MAP[tag]
    if (!fullTag || !fullTag[field]) return false
    return fullTag[field] === value
  }
}
