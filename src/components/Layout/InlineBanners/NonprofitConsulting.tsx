import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import ControlledBanner from './ControlledBanner'

const NonprofitConsulting = () => {
  return (
    <ControlledBanner
      id="nonprofit-consulting-banner"
      isClosable
      heading="Are you a nonprofit looking for technical advice or expertise?"
      text={
        <React.Fragment>
          I am available for pro-bono consulting.&nbsp;
          <Link
            sx={{
              color: 'white',
              // fontStyle: 'italic',
              '&:hover': {
                textDecoration: 'none'
              }
            }}
            to="/contact"
          >
            Get in touch here
          </Link>
        </React.Fragment>
      }
    />
  )
}

export default NonprofitConsulting
