<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  A Gatsby Basic Webpage
</h1>

A basic Gatsby webpage that contains 4 static pages and a blog that pulls its content from a Contentful account.

This app was created to increase my React knowledge as well as learn Gatsby. It was made while following the Great Gatsby Bootcamp series by [Mr Andrew Mead](https://twitter.com/andrew_j_mead).

## Important

The website is a static website and will not update dynamically e.g. after a new blog poast is made. You will need to redeploy the website. See **Adding new content** below.

## Quick start

1. `git clone https://github.com/martink-rsa/Basic-Gatsby-Webpage.git`
2. `npm install`
3. Create a Contentful account, taking the example API keys given to the user.
4. Create a `.env` file in the root directory and add the following:

   _WARNING:
   This file will contain sensitive info. Do not commit this file to a repo nor share it online_

```
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=<YOUR CONTENTFUL ID HERE>
CONTENTFUL_ACCESS_TOKEN=<YOUR CONTENTFUL TOKEN HERE>
```

## Adding new content

1. Update content by making a new Contentful blog post
2. Go to Netlify.com and select the app
3. Click on Deploys
4. Click 'Trigger deploy' dropdown and then 'Clear cache and deploy site`
