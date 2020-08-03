[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/estepanov/personal-site)

# Hey there!

I bootstrapped this project with [Gatsby.js](https://www.gatsbyjs.org/). All my written (and job info) content lives in `~src/content`.
Github commit data is pulled at build time using a GraphQL query passed to `gatsby-source-github-api`.

The backend for this site is a TypeScript Serverless project which can be found here https://github.com/estepanov/personal-site-api

## 🗒️ Features

- TypeScript
- ESLint (with custom ESLint rules)
- Markdown rendering with Remark
- Basic component structure
- CSS-in-JS powered by [emotion](https://emotion.sh/)
- Style props by [styled-system](https://styled-system.com/)
- Theme graphing by [theme-ui](https://theme-ui.com)


## 🚀 Quick start

> A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

1.  **Create a Gatsby site.**

    Install `gatsby-cli` package globally on your machine.

    ```bash
    # using NPM
    npm install -g gatsby-cli

    # using YARN
    yarn global add gatsby-cli
    ```

    Use the `gatsby-cli` to create a new site and install its dependencies.

    ```bash
    gatsby new project-name https://github.com/resir014/gatsby-starter-typescript-plus
    ```

2.  **Start developing.**

    Move to project's directory.

    ```bash
    cd project-name/
    ```

    Start your site.

    ```bash
    # using npm
    npm start

    # using yarn
    yarn start
    ```

    Open source code using your favorite IDE/Text editor and navigate to `src/` directory, this is where your application live.

3.  **Build your application for production.**

    Once you're finished, you can make production build of your app using:

    ```bash
    # using npm
    npm run build

    # using yarn
    yarn build
    ```

4.  **Deploy your app to Github pages!**

    After building your application in step 3, you're ready to publish your app and go online!

    ```bash
    # using npm
    npm run deploy

    # using yarn
    yarn deploy
    ```
