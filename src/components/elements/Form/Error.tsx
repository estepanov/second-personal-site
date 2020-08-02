import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { ErrorMessage } from '@hookform/error-message'

interface ErrorProps {
  errors: object
  name: stringl
}

export const Error: React.FC<ErrorProps> = ({ errors, name }) => {
  return (
    <Text
      sx={{
        fontSize: 0,
        color: 'red'
      }}
    >
      <ErrorMessage errors={errors} name={name}>
        {({ messages }) => messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)}
      </ErrorMessage>
    </Text>
  )
}
