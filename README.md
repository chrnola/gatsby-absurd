[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/chrnola/gatsby-absurd)
[![Netlify Status](https://api.netlify.com/api/v1/badges/30449ba4-6ea5-4039-aa76-2e742cdd6faa/deploy-status)](https://app.netlify.com/sites/optimistic-nobel-4181cb/deploys)

# POM

A repo for the [Peace of Mind](https://peaceofmindpetsitting.net) website.

## Installation

Install the dependencies:

### `yarn install`

Run the development server:

### `yarn dev`

Production build to `/public`:

### `yarn build`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `yarn clean`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

## Credits
Based on the [gatsby-absurd starter](https://www.gatsbyjs.com/starters/ajayns/gatsby-absurd).
