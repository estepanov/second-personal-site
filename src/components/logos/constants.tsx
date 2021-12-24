import React from 'react'

import ElectronLogo from './Electron'
import Postgres from './Postgres'
import Redis from './Redis'
import Feathers from './Feathers'
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
import Netlify from './Netlify'
import Parse from './Parse'
import Ruby from './Ruby'
import Rails from './Rails'
import Sequelize from './Sequelize'
import Gatsby from './Gatsby'
import GraphQL from './GraphQL'
import Python from './Python'
import Docker from './Docker'
import Mongoose from './Mongoose'
import Serverless from './Serverless'
import SocketIO from './SocketIO'
import Node from './Node'
import Sass from './Sass'
import Angular from './Angular'
import StyledComponents from './StyledComponents'
import ThemeUI from './ThemeUI'

import { TechTag, TagMap, TechTypes, TechRunTimeEnv } from '../../interfaces/TechTag'
import Tailwind from './Tailwind'
import Emotion from './Emotion'
import Jest from './Jest'
import Cypress from './Cypress'
import MobX from './Mobx'
import ReactLogo from './React'
import CSS3 from './CSS3'
import HTML5 from './HTML5'

const TAG_MAP: TagMap = {
  python: {
    order: 0,
    name: 'Python',
    slug: 'python',
    type: TechTypes.language,
    color: '#0277BD',
    icon: <Python />,
    includes: [TechRunTimeEnv.backend, TechTypes.language]
  },
  ruby: {
    order: 2,
    name: 'Ruby',
    slug: 'ruby',
    type: TechTypes.language,
    color: '#db0000',
    icon: <Ruby />,
    includes: [TechRunTimeEnv.backend, TechTypes.language]
  },
  node: {
    order: 0,
    name: 'Node.js',
    slug: 'node',
    color: '#69bd47',
    type: TechTypes.runtime,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Node />,
    includes: [TechRunTimeEnv.backend, TechTypes.runtime]
  },
  emotion: {
    order: 4,
    name: 'Emotion',
    slug: 'emotion',
    color: '#b71c91',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    icon: <Emotion />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  jest: {
    order: 3,
    name: 'Jest',
    slug: 'jest',
    color: '#14c213',
    type: TechTypes.testing,
    icon: <Jest />,
    includes: [TechRunTimeEnv.backend, TechRunTimeEnv.frontend, TechTypes.framebrary, TechTypes.testing]
  },
  cypress: {
    order: 4,
    name: 'Cypress.io',
    slug: 'cypress',
    color: '#4A4A4D',
    type: TechTypes.testing,
    icon: <Cypress />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary, TechTypes.testing]
  },
  express: {
    order: 3,
    name: 'Express.js',
    slug: 'express',
    color: '#000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Express />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  rails: {
    order: 4,
    name: 'Ruby on Rails',
    slug: 'rails',
    color: '#db0000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'rails',
    icon: <Rails />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  javascript: {
    order: 0,
    name: 'JavaScript',
    slug: 'javascript',
    color: '#ffd603',
    type: TechTypes.language,
    icon: <JavaScript />,
    includes: [TechRunTimeEnv.backend, TechRunTimeEnv.frontend, TechTypes.language]
  },
  typescript: {
    order: 0,
    name: 'TypeScript',
    slug: 'typescript',
    type: TechTypes.language,
    color: '#294e80',
    icon: <TypeScript />,
    includes: [TechRunTimeEnv.backend, TechRunTimeEnv.frontend, TechTypes.language]
  },
  angular: {
    order: 3,
    name: 'Angular',
    slug: 'angular',
    color: '#e23237',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Angular />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  react: {
    order: 2,
    name: 'React',
    slug: 'react',
    color: '#60dafb',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ReactLogo />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  nextjs: {
    order: 2.1,
    name: 'Next.js',
    slug: 'nextjs',
    color: '#000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <NextJs />,
    includes: [TechRunTimeEnv.frontend, TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  gatsby: {
    order: 2.2,
    name: 'Gatsby',
    slug: 'gatsby',
    color: '#639',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Gatsby />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  graphql: {
    order: 4,
    name: 'GraphQL',
    slug: 'graphql',
    color: '#e10098',
    type: TechTypes.language,
    environment: TechRunTimeEnv.backend,
    icon: <GraphQL />,
    includes: [TechRunTimeEnv.frontend, TechRunTimeEnv.backend]
  },
  'react-native': {
    order: 2.3,
    name: 'React Native',
    slug: 'react-native',
    color: '#000000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ReactNative />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  redux: {
    order: 3,
    name: 'Redux',
    slug: 'redux',
    color: '#7e57c2',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Redux />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  mobx: {
    order: 3.1,
    name: 'MobX',
    slug: 'mobx',
    color: '#FF9955',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'typescript',
    icon: <MobX />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  electron: {
    order: 2.3,
    name: 'Electron',
    slug: 'electron',
    color: '#2B2E3A',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <ElectronLogo />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  postgres: {
    order: 1.1,
    name: 'PostgreSQL',
    slug: 'postgres',
    color: '#336791',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    icon: <Postgres />,
    includes: [TechRunTimeEnv.backend, TechTypes.database]
  },
  mongodb: {
    order: 1,
    name: 'MongoDB',
    slug: 'mongodb',
    color: '#4caf50',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    icon: <MongoDB />,
    includes: [TechRunTimeEnv.backend, TechTypes.database]
  },
  redis: {
    order: 1.2,
    name: 'Redis',
    slug: 'redis',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.backend,
    color: '#DC382D',
    icon: <Redis />,
    includes: [TechRunTimeEnv.backend, TechTypes.database]
  },
  firebase: {
    order: 4,
    name: 'Firebase',
    slug: 'firebase',
    color: '#ff8f00',
    type: TechTypes.database,
    // environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    icon: <Firebase />,
    includes: [TechRunTimeEnv.frontend, TechRunTimeEnv.backend, TechTypes.database]
  },
  'styled-components': {
    order: 3,
    name: 'styled-components',
    slug: 'styled-components',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    color: '#ffd546',
    icon: <StyledComponents />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  sass: {
    order: 3,
    name: 'SASS',
    slug: 'sass',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    color: '#cf649a',
    icon: <Sass />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  'theme-ui': {
    order: 3,
    name: 'Theme-UI',
    slug: 'theme-ui',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    color: '#000',
    icon: <ThemeUI />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  feathers: {
    order: 3,
    name: 'FeathersJS',
    slug: 'feathers',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    color: '#d414a5',
    icon: <Feathers />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  'mobx-state-tree': {
    order: 3,
    name: 'Mobx-State-Tree',
    slug: 'mobx-state-tree',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    language: 'javascript',
    color: '#ff7102',
    icon: <MobxStateTree />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  css3: {
    order: 9,
    name: 'CSS3',
    slug: 'css3',
    type: TechTypes.language,
    environment: TechRunTimeEnv.frontend,
    color: '#2168ed',
    icon: <CSS3 />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  html5: {
    order: 9,
    name: 'HTML5',
    slug: 'html5',
    type: TechTypes.language,
    environment: TechRunTimeEnv.frontend,
    color: '#e44e27',
    icon: <HTML5 />,
    includes: [TechRunTimeEnv.frontend]
  },
  heroku: {
    order: 4,
    name: 'Heroku',
    slug: 'heroku',
    color: '#7e57c2',
    type: TechTypes.deployment,
    icon: <Heroku />,
    includes: [TechRunTimeEnv.frontend, TechTypes.deployment, TechRunTimeEnv.backend]
  },
  aws: {
    order: 2,
    name: 'Amazon Web Services',
    slug: 'aws',
    color: '#252f3e',
    type: TechTypes.deployment,
    icon: <AWS />,
    includes: [TechRunTimeEnv.frontend, TechTypes.deployment, TechRunTimeEnv.backend]
  },
  azure: {
    order: 4,
    name: 'Azure',
    slug: 'azure',
    color: '#035bda',
    type: TechTypes.deployment,
    icon: <Azure />,
    includes: [TechRunTimeEnv.frontend, TechTypes.deployment, TechRunTimeEnv.backend]
  },
  netlify: {
    order: 4,
    name: 'Netlify',
    slug: 'netlify',
    color: '#20C6B7',
    type: TechTypes.deployment,
    icon: <Netlify />,
    includes: [TechRunTimeEnv.frontend, TechTypes.deployment]
  },
  parse: {
    order: 3,
    name: 'Parse.js',
    slug: 'parse',
    color: '#169cee',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Parse />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  sequelize: {
    order: 3,
    name: 'Sequelize',
    slug: 'sequelize',
    color: '#03afef',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Sequelize />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary, TechTypes.database]
  },
  serverless: {
    order: 3,
    name: 'Serverless',
    slug: 'serverless',
    color: '#fd5750',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'Serverless',
    icon: <Serverless />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary]
  },
  tailwind: {
    order: 3,
    name: 'Tailwind CSS',
    slug: 'tailwind',
    color: '#2298BD',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    icon: <Tailwind />,
    includes: [TechRunTimeEnv.frontend, TechTypes.framebrary]
  },
  mongoose: {
    order: 3,
    name: 'Mongoose',
    slug: 'mongoose',
    color: '#880000',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'javascript',
    icon: <Mongoose />,
    includes: [TechRunTimeEnv.backend, TechTypes.framebrary, TechTypes.database]
  },
  docker: {
    order: 5,
    name: 'Docker',
    slug: 'docker',
    color: '#394d54',
    type: TechTypes.devops,
    language: 'javascript',
    icon: <Docker />,
    includes: [TechRunTimeEnv.backend, TechRunTimeEnv.frontend, TechTypes.devops]
  },
  socketio: {
    order: 4,
    name: 'Socket.io',
    slug: 'socketio',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    color: '#010101',
    icon: <SocketIO />,
    includes: [TechRunTimeEnv.backend, TechRunTimeEnv.frontend, TechTypes.framebrary]
  }
}

export default TAG_MAP

export const techTagFilter = (field: keyof TechTag, value: string) => {
  return (tag: keyof typeof TAG_MAP) => {
    const fullTag = TAG_MAP[tag]
    if (!fullTag || !fullTag[field]) return false
    return fullTag[field] === value
  }
}

export const techTagURL = (tag: TechTag) => {
  let base = "/"
  switch (tag.type) {
    case TechTypes.language:
      base += "language/"
      break;
    default:
      base += "technology/"
      break
  }
  base += `${tag.slug}`
  return base
}
