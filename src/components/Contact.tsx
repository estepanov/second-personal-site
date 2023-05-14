import React, { useRef, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
/** @jsx jsx */
import { jsx, Box, Input, Textarea, Button, Message, Spinner, Flex } from "theme-ui";
import * as yup from "yup";
import { InputGroup } from "./elements/Form/InputGroup";

import { api } from "../Request";
import { Captcha } from "./Captcha";

const ContactSchema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  message: yup.string().required().min(20),
  captchaToken: yup.string().min(10).required("Please verify you are human."),
});

type FormData = {
  name: string;
  email: string;
  message: string;
  captchaToken: string | null;
};

export const Contact: React.FC = () => {
  const [isSending, setIsStending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const captchaRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = handleSubmit(async ({ name, email, message, captchaToken }, e) => {
    if (isSending) return undefined;
    setIsStending(false);
    setServerError("");
    try {
      // DISABLED BEAUSE ARCHIVED PROJECT
      // eslint-disable-next-line no-alert
      alert(
        "this site is only live for demo purposes. this form does not actually send me an email anymore. please use the new form instead.",
      );
      // await api.post('sendMessage', {
      //   name,
      //   email,
      //   message,
      //   captchaToken
      // })
      captchaRef?.current?.resetCaptcha();
      e?.target.reset();
      setIsSuccess(true);
    } catch (error) {
      let errorMessage = "Something went wrong";
      if (error?.response?.data?.message) errorMessage = error.response.data.message;
      setIsSuccess(false);
      setServerError(errorMessage);
      console.error(error);
    }
    setIsStending(false);
  });

  useEffect(() => {
    register("captchaToken", { required: true });
  });

  return (
    <React.Fragment>
      {isSuccess && (
        <Message
          sx={{
            backgroundColor: "green",
            borderLeftWidth: 0,
            color: "white",
            marginBottom: 2,
          }}
        >
          <b>Thanks for reaching out!</b> I will get back to you soon.
        </Message>
      )}
      {serverError && (
        <Message
          sx={{
            backgroundColor: "red",
            borderLeftWidth: 0,
            color: "white",
            marginBottom: 2,
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
          register={register("name", { required: true })}
          Component={Input}
          errors={errors}
        />
        <InputGroup
          disabled={isSending}
          label="Email address"
          name="email"
          register={register("email", { required: true })}
          Component={Input}
          errors={errors}
        />
        <InputGroup
          disabled={isSending}
          label="Message"
          name="message"
          register={register("message", { required: true })}
          Component={Textarea}
          errors={errors}
        />
        <Controller
          control={control}
          name="captchaToken"
          render={({ field: { onChange, onBlur } }) => (
            <Captcha id="contact-form" ref={captchaRef} name="captchaToken" onChange={onChange} onBlur={onBlur} errors={errors} />
          )}
        />
        <Flex>
          <Button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </Button>
          {isSending && <Spinner sx={{ marginLeft: 2 }} />}
        </Flex>
      </Box>
    </React.Fragment>
  );
};
