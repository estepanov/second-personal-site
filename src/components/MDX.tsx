import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

const MDX: React.FC = ({ children }) => {
  return <MDXRenderer>{children}</MDXRenderer>;
};

export default MDX;
