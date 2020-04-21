import React from 'react'

import ElectronLogo from './Electron'
import Postgres from './Postgres'
import Redis from './Redis'
import Firebase from './Firebase'

const TAG_MAP = {
  node: {
    color: '#69bd47',
    icon: <i className="fab fa-node" />
  },
  javascript: {
    color: '##ffd603',
    icon: <i className="fab fa-js" />
  },
  react: {
    color: '#60dafb',
    icon: <i className="fab fa-react" />
  },
  electron: {
    color: '#2B2E3A',
    icon: <ElectronLogo />
  },
  postgres: {
    color: '#32668f',
    icon: <Postgres />
  },
  redis: {
    color: '#d92a21',
    icon: <Redis />
  },
  firebase: {
    color: '#ff8f00',
    icon: <Firebase />
  },
  'styled-components': {
    color: '#da9a62',
    icon: <>💅</>
  }
}

export default TAG_MAP
