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
        marginRight: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText',
        paddingX: 2,
        paddingY: 1,
        // transition: 'ease-in 0.3s',
        '& span': {
          // transition: 'ease-in 0.3s',
          whiteSpace: 'nowrap',
          fontSize: 2,
          fontFamily: 'heading',
          fontWeight: 'heading',
          marginLeft: 2,
          padding: 1,
          opacity: 0.8
        }
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
