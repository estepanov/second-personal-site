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

const TAG_MAP = {
  node: {
    name: 'Node',
    color: '#69bd47',
    icon: <i className="fab fa-node" />
  },
  express: {
    name: 'Express',
    color: '#000',
    icon: <Express />
  },
  javascript: {
    name: 'JavaScript',
    color: '#ffd603',
    icon: <JavaScript />
    // icon: <i className="fab fa-js" />
  },
  typescript: {
    name: 'TypeScript',
    color: '#294e80',
    icon: <TypeScript />
  },
  react: {
    name: 'React',
    color: '#60dafb',
    icon: <i className="fab fa-react" />
  },
  'react-native': {
    name: 'React Native',
    color: '#000000',
    icon: <ReactNative />
  },
  redux: {
    name: 'Redux',
    color: '#7e57c2',
    icon: <Redux />
  },
  electron: {
    name: 'Electron',
    color: '#2B2E3A',
    icon: <ElectronLogo />
  },
  postgres: {
    name: 'PostgreSQL',
    color: '#32668f',
    icon: <Postgres />
  },
  mongodb: {
    name: 'MongoDB',
    color: '#4caf50',
    icon: <MongoDB />
  },
  redis: {
    name: 'Redis',
    color: '#d92a21',
    icon: <Redis />
  },
  firebase: {
    name: 'Firebase',
    color: '#ff8f00',
    icon: <Firebase />
  },
  'styled-components': {
    name: 'styled-components',
    color: '#da9a62',
    icon: <>💅</>
  },
  css3: {
    name: 'CSS3',
    color: '#2168ed',
    icon: <i className="fab fa-css3-alt" />
  },
  html5: {
    name: 'HTML5',
    color: '#e44e27',
    icon: <i className="fab fa-html5" />
  },
  heroku: {
    name: 'Heroku',
    color: '#7e57c2',
    icon: <Heroku />
  },
  aws: {
    name: 'Amazon Web Services',
    color: '#252f3e',
    icon: <AWS />
  },
  azure: {
    name: 'Azure',
    color: '#035bda',
    icon: <Azure />
  }
}

export default TAG_MAP
