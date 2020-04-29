import React from 'react'

import ElectronLogo from './Electron'
import Postgres from './Postgres'
import Redis from './Redis'
import Firebase from './Firebase'

const TAG_MAP = {
  node: {
    name: 'Node',
    color: '#69bd47',
    icon: <i className="fab fa-node" />
  },
  javascript: {
    name: 'JavaScript',
    color: '##ffd603',
    icon: <i className="fab fa-js" />
  },
  react: {
    name: 'React',
    color: '#60dafb',
    icon: <i className="fab fa-react" />
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
  }
}

export default TAG_MAP
