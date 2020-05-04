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
import Next from './Next'
import Parse from './Parse'
import Sequelize from './Sequelize'
import Gatsby from './Gatsby'
import GraphQL from './GraphQL'
import Python from './Python'
import Docker from './Docker'

import { TagMap } from '../../interfaces/TechTag'

const TAG_MAP: TagMap = {
  python: {
    order: 0,
    name: 'Python',
    color: '#0277BD',
    icon: <Python />
  },
  node: {
    order: 0,
    name: 'Node',
    color: '#69bd47',
    icon: <i className="fab fa-node" />
  },
  express: {
    order: 2,
    name: 'Express',
    color: '#000',
    icon: <Express />
  },
  javascript: {
    order: 0,
    name: 'JavaScript',
    color: '#ffd603',
    icon: <JavaScript />
    // icon: <i className="fab fa-js" />
  },
  typescript: {
    order: 0,
    name: 'TypeScript',
    color: '#294e80',
    icon: <TypeScript />
  },
  react: {
    order: 1,
    name: 'React',
    color: '#60dafb',
    icon: <i className="fab fa-react" />
  },
  next: {
    order: 1,
    name: 'Next.js',
    color: '#000',
    icon: <Next />
  },
  gatsby: {
    order: 1,
    name: 'Gatsby',
    color: '#639',
    icon: <Gatsby />
  },
  graphql: {
    order: 1,
    name: 'GraphQL',
    color: '#e10098',
    icon: <GraphQL />
  },
  'react-native': {
    order: 1,
    name: 'React Native',
    color: '#000000',
    icon: <ReactNative />
  },
  redux: {
    order: 2,
    name: 'Redux',
    color: '#7e57c2',
    icon: <Redux />
  },
  electron: {
    order: 2,
    name: 'Electron',
    color: '#2B2E3A',
    icon: <ElectronLogo />
  },
  postgres: {
    order: 1,
    name: 'PostgreSQL',
    color: '#32668f',
    icon: <Postgres />
  },
  mongodb: {
    order: 1,
    name: 'MongoDB',
    color: '#4caf50',
    icon: <MongoDB />
  },
  redis: {
    order: 1,
    name: 'Redis',
    color: '#d92a21',
    icon: <Redis />
  },
  firebase: {
    order: 2,
    name: 'Firebase',
    color: '#ff8f00',
    icon: <Firebase />
  },
  'styled-components': {
    order: 2,
    name: 'styled-components',
    color: '#da9a62',
    icon: <>💅</>
  },
  'mobx-state-tree': {
    order: 2,
    name: 'Mobx-State-Tree',
    color: '#ff7102',
    icon: <MobxStateTree />
  },
  css3: {
    order: 2,
    name: 'CSS3',
    color: '#2168ed',
    icon: <i className="fab fa-css3-alt" />
  },
  html5: {
    order: 2,
    name: 'HTML5',
    color: '#e44e27',
    icon: <i className="fab fa-html5" />
  },
  heroku: {
    order: 2,
    name: 'Heroku',
    color: '#7e57c2',
    icon: <Heroku />
  },
  aws: {
    order: 2,
    name: 'Amazon Web Services',
    color: '#252f3e',
    icon: <AWS />
  },
  azure: {
    order: 2,
    name: 'Azure',
    color: '#035bda',
    icon: <Azure />
  },
  parse: {
    order: 4,
    name: 'Parse.js',
    color: '#169cee',
    icon: <Parse />
  },
  sequelize: {
    order: 1,
    name: 'Sequelize',
    color: '#03afef',
    icon: <Sequelize />
  },
  docker: {
    order: 1,
    name: 'Docker',
    color: '#394d54',
    icon: <Docker />
  }
}

export default TAG_MAP
