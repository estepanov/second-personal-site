// eslint-disable-next-line @typescript-eslint/no-unused-vars,react/no-typos
import { AriaAttributes, DOMAttributes } from "react";
import { ThemeUIStyleObject } from "theme-ui";

interface CSSModule {
  [className: string]: string;
}

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.module.css" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    sx?: ThemeUIStyleObject;
  }

  interface SVGProps<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    sx?: ThemeUIStyleObject;
  }
}
