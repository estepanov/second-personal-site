import React, { useCallback, useState } from "react";
/** @jsx jsx */
import { jsx, Button, Box } from "theme-ui";
import { useCookies } from "react-cookie";

import BasicBanner, { BasicBanerProps } from "./BasicBanner";

interface ControlledBanerProps extends BasicBanerProps {
  // color? string
  id: string;
  isClosable?: boolean;
  actions?: React.ReactNode;
}

const ControlledBanner: React.FC<ControlledBanerProps> = ({ id, isClosable = false, heading, text, children, actions }) => {
  // const [cookies, setCookie] = useCookies([id])
  // const toggleCookie = useCallback(() => {
  //   if (id && isClosable) {
  //     setCookie(id, !cookies[id], { path: '/' })
  //   }
  // }, [cookies, setCookie, id, isClosable])
  // if (cookies[id]) return null
  const [hidden, setHidden] = useState(false);
  const onClose = () => setHidden(true);
  if (hidden) return null;
  return (
    <BasicBanner heading={heading} text={text}>
      {children}
      {actions && <Box sx={{ paddingX: 2, flexShrink: 0 }}>{actions}</Box>}
      {isClosable && (
        <Button
          aria-label="close banner"
          sx={{
            marginLeft: 2,
            backgroundColor: "transparent",
            color: "background",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          <i className="fas fa-times" />
        </Button>
      )}
    </BasicBanner>
  );
};

export default ControlledBanner;
