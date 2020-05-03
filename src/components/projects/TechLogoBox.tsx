import React from 'react'
// import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import TAG_MAP from '../logos/constants'

interface TechLogoBoxProps {
  tag?: string
}

const TechLogoBox: React.FC<TechLogoBoxProps> = ({ tag }) => {
  return (
    <Flex
      sx={{
        // cursor: 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: TAG_MAP[tag] ? 3 : 1,
        color: TAG_MAP[tag] ? TAG_MAP[tag].color : 'primaryLight',
        paddingX: 2,
        paddingY: 1,
        // transition: 'ease-in 0.3s',
        // transform: 'scale(1)',
        '& span': {
          // transition: 'ease-in 0.3s',
          whiteSpace: 'nowrap',
          // fontSize: 1,
          marginLeft: 2,
          padding: 1,
          opacity: 0.8
        }
        // '&:hover': {
        //   '& span': {
        //     opacity: 1
        //   },
        //   transform: 'scale(1.05)',
        //   bg: 'white',
        //   color: TAG_MAP[tag] ? TAG_MAP[tag].color : 'primaryLight'
        // }
      }}
      key={tag}
    >
      {TAG_MAP[tag] ? (
        <React.Fragment>
          {TAG_MAP[tag].icon}
          <span>{TAG_MAP[tag].name}</span>
        </React.Fragment>
      ) : (
          tag
        )}
    </Flex>
  )
}

export default TechLogoBox
