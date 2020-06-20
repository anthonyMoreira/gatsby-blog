# Anthony Moreira's blog using gatsby, contentful and netlify for hosting

## Features

* Simple content model and structure. Easy to adjust to your needs.
* Contentful integration using contentful [Sync API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type)
* Using contentful [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
* Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
* Tags for categories
* Responsive design
* Post search (todo)
* SEO (todo)
* Comments (todo)

## Requirements

## Getting started

Install npm and gatsby cli

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful-userland/gatsby-contentful-starter.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn run setup`.

![Command line dialog of the yarn run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg "Command line dialog of the yarn run setup command")

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`yarn run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `npm run dev`

Run in the project locally.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `npm run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.
