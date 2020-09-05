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
  emotion: {
    order: 4,
    name: 'Emotion CSS-in-JS',
    color: '#b71c91',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    icon: <Emotion />
  },
  jest: {
    order: 3,
    name: 'Jest',
    color: '#14c213',
    type: TechTypes.testing,
    icon: <Jest />
  },
  cypress: {
    order: 4,
    name: 'Cypress.io',
    color: '#4A4A4D',
    type: TechTypes.testing,
    icon: <Cypress />
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
    order: 4,
    name: 'GraphQL',
    color: '#e10098',
    type: TechTypes.language,
    environment: TechRunTimeEnv.backend,
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
    icon: <StyledComponents />
  },
  sass: {
    order: 3,
    name: 'SASS',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    color: '#cf649a',
    icon: <Sass />
  },
  'theme-ui': {
    order: 3,
    name: 'Theme-UI',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    color: '#000',
    icon: <ThemeUI />
  },
  feathers: {
    order: 3,
    name: 'FeathersJS',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    color: '#333',
    icon: <Feathers />
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
    order: 9,
    name: 'CSS3',
    type: TechTypes.language,
    environment: TechRunTimeEnv.frontend,
    color: '#2168ed',
    icon: <i className="fab fa-css3-alt" />
  },
  html5: {
    order: 9,
    name: 'HTML5',
    type: TechTypes.language,
    environment: TechRunTimeEnv.frontend,
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
  netlify: {
    order: 4,
    name: 'Netlify',
    color: '#20C6B7',
    type: TechTypes.deployment,
    icon: <Netlify />
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
  serverless: {
    order: 3,
    name: 'Serverless',
    color: '#fd5750',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.backend,
    language: 'Serverless',
    icon: <Serverless />
  },
  tailwind: {
    order: 3,
    name: 'Tailwind CSS',
    color: '#2298BD',
    type: TechTypes.framebrary,
    environment: TechRunTimeEnv.frontend,
    icon: <Tailwind />
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
