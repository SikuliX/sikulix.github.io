# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

The following commands have to be used while being in the directory, that contains the website sources.

When running in a Git environment, you have to checkout the branch containing the website sources before.

For more information on the build-deploy-workflow see here: [Docusaurus 2 docs/deployment](https://v2.docusaurus.io/docs/deployment)

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
