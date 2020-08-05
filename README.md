[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/estepanov/personal-site)

# Hey there!

I bootstrapped this project with [Gatsby.js](https://www.gatsbyjs.org/). All my written (and job info) content lives in `~src/content`.
Github commit data is pulled at build time using a GraphQL query passed to `gatsby-source-github-api`.

The backend for this site is a TypeScript Serverless project which can be found here https://github.com/estepanov/personal-site-api

## 🗒️ Tech Stack

- [Gatsby](https://www.gatsbyjs.org/)
  - Configured with pagination for list pages
  - Uses `.md` and `.mdx` files as data sources
  - image processing by [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) (with custom ESLint rules)
- Markdown ([Remark](https://remark.js.org/)) and [MDX](https://mdxjs.com/) rendering
  - frontmatter content descriptions
  - Code syntax highlighting by [prism](https://github.com/PrismJS/prism)
- CSS-in-JS powered by [emotion](https://emotion.sh/)
- Theme graphing by [theme-ui](https://theme-ui.com)
- [GitHub GraphQL API](https://docs.github.com/en/graphql) for commit history graph data
  - graph data helpers from [d3-scale](https://github.com/d3/d3-scale)
- [Netlify CMS](https://www.netlifycms.org/) for content editing and authoring
- SEO related fields managed with [react-helmet](https://github.com/nfl/react-helmet)
- Date and time formating/parsing powered by [dayjs](https://day.js.org/)
- Environment variables loaded with [dotenv](https://github.com/motdotla/dotenv)
- Forms managed using [react-hook-form](https://react-hook-form.com/)
  - [yup](https://github.com/jquense/yup) form schema and validation
  - [hCaptcha](https://www.hcaptcha.com/) limit spam and bots in forms
- Network requests using [axios](https://github.com/axios/axios)

## Overview


### Content

All content used to generate pages at build time lives in `./src/content`. Currently there are three types of content conigured:

#### pages

Pages are generic pages that exist to hold any type of content that is not a blog post, project, or work experience.
An example is the Contact page available at `/contact`. Gatsby builds `/contact` becuase of `./src/content/contact.mdx`.

#### Projects

Projects are things I have worked on.  `./src/content/projects`

#### Blog posts

`./src/content/blog`

#### Work experience

`./src/content/work`

### JSX pages

`./src/pages/`

### Components

`./src/components/`


## 🚀 Quick start

> A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

1.  **Install Gatsby**

    Install `gatsby-cli` package globally on your machine.

    ```bash
    # using NPM
    npm install -g gatsby-cli

    # using YARN
    yarn global add gatsby-cli
    ```

2.  **Start developing.**

    Move to project's directory.

    ```bash
    cd project-name/
    ```

    Start your site.

    ```bash
    # using yarn
    yarn start
    ```

    Open source code using your favorite IDE/Text editor and navigate to `src/` directory, this is where your application live.

