import React, { useRef, useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
// import HCaptcha from '@hcaptcha/react-hcaptcha'

/** @jsx jsx */
import { jsx, Box, Input, Textarea, Button, Message, Spinner, Flex } from 'theme-ui'
import * as yup from 'yup'
import { InputGroup } from './elements/Form/InputGroup'
// import { Error } from './elements/Form/Error'

import { api } from '../Request'
import { Captcha } from './Captcha'

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3),
  email: yup
    .string()
    .email()
    .required(),
  message: yup
    .string()
    .required()
    .min(20),
  captchaToken: yup
    .string()
    .min(10)
    .required('Please verify you are human.')
})

type FormData = {
  name: string
  email: string
  message: string
  captchaToken: string | null
}

export const Contact: React.FC = () => {
  const [isSending, setIsStending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState('')
  const captchaRef = useRef()
  const { register, handleSubmit, errors, control } = useForm<FormData>({
    resolver: yupResolver(ContactSchema)
  })
  const onSubmit = handleSubmit(async ({ name, email, message, captchaToken }, e) => {
    if (isSending) return undefined
    setIsStending(false)
    setServerError('')
    try {
      await api.post('sendMessage', {
        name,
        email,
        message,
        captchaToken
      })
      captchaRef?.current?.resetCaptcha()
      e?.target.reset()
      setIsSuccess(true)
    } catch (error) {
      let errorMessage = 'Something went wrong'
      if (error?.response?.data?.message) errorMessage = error.response.data.message
      setIsSuccess(false)
      setServerError(errorMessage)
      console.error(error)
    }
    setIsStending(false)
  })

  useEffect(() => register({ name: 'captchaToken' }, { required: true }))

  return (
    <React.Fragment>
      {isSuccess && (
        <Message
          sx={{
            backgroundColor: 'green',
            borderLeftWidth: 0,
            color: 'white',
            marginBottom: 2
          }}
        >
          <b>Thanks for reaching out!</b> I will get back to you soon.
        </Message>
      )}
      {serverError && (
        <Message
          sx={{
            backgroundColor: 'red',
            borderLeftWidth: 0,
            color: 'white',
            marginBottom: 2
          }}
        >
          <b>There was an error sending the message:</b> {serverError}
        </Message>
      )}
      <Box as="form" onSubmit={onSubmit}>
        <InputGroup
          disabled={isSending}
          label="Name"
          name="name"
          register={register({ required: true })}
          Component={Input}
          errors={errors}
        />
        <InputGroup
          disabled={isSending}
          label="Email address"
          name="email"
          register={register({ required: true })}
          Component={Input}
          errors={errors}
        />
        <InputGroup
          disabled={isSending}
          label="Message"
          name="message"
          register={register({ required: true })}
          Component={Textarea}
          errors={errors}
        />
        <Controller
          control={control}
          name="captchaToken"
          render={({ onChange }) => <Captcha id="contact-form" ref={captchaRef} name="captchaToken" onChange={onChange} errors={errors} />}
        />
        {/* <HCaptcha
          size="normal"
          ref={captchaRef}
          sitekey={process.env.GATSBY_HCAPTCHA_SITE_ID}
          onVerify={tok => setValue('captchaToken', tok, { shouldDirty: true, shouldValidate: true })}
          onExpire={() => setValue('captchaToken', null, { shouldDirty: true, shouldValidate: true })}
          onError={err => console.error('Hcap error', err)}
        />
        <Error errors={errors} name="captchaToken" /> */}

        <Flex>
          <Button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </Button>
          {isSending && <Spinner sx={{ marginLeft: 2 }} />}
        </Flex>
      </Box>
    </React.Fragment>
  )
}
