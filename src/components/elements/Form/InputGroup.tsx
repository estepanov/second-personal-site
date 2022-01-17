import React from 'react'
import { Flex } from 'theme-ui'
import { Label } from 'theme-ui'
import { Error } from './Error'

interface InputGroupProps {
  name: string
  label: string
  disabled: boolean
  Component: React.FC
  register: any // eslint-disable-line @typescript-eslint/no-explicit-any
  errors: object
  mb: number
}

export const InputGroup: React.FC<InputGroupProps> = ({ name, disabled, label, Component, register, errors, mb = 3 }) => {
  const hasError = errors[name]
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1 }} mb={mb}>
      <Label
        htmlFor={name}
        sx={{
          marginBottom: 2,
          fontWeight: 'bold'
          // color: hasError ? 'red' : undefined
        }}
      >
        {label}
      </Label>
      <Component
        disabled={disabled}
        sx={{
          borderColor: hasError ? 'secondary' : undefined
        }}
        name={name}
        id={name}
        {...register}
      />
      <Error errors={errors} name={name} />
    </Flex>
  )
}
