import * as React from "react";
import { graphql } from "gatsby";
import MDX from "../components/MDX";

import Layout from "../layouts";

interface PageTemplateProps {
  location: Location;
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    post: {
      body: string;
      excerpt: string;
      frontmatter: {
        title: string;
        description: string;
      };
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data, location }) => (
  <Layout title={data.post.frontmatter.title} description={data.post.frontmatter.description} pathname={location.pathname}>
    <MDX>{data.post.body}</MDX>
  </Layout>
);

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        description
      }
    }
  }
`;
