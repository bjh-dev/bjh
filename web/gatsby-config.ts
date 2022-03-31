/** @type {import('gatsby').GatsbyConfig} */
import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://localhost:8000`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT,
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.SANITY_WATCHMODE || false,
        overlayDrafts: true,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://dev.bjh.dev`,
        sitemap: `https://dev.bjh.dev/sitemap.xml`,
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            host: `http://localhost:8000/`,
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          staging: {
            host: `http://dev.bjh.dev/`,
            policy: [{ userAgent: `*`, disallow: `/` }],
          },
          production: {
            host: `http://dev.bjh.dev/`,
            policy: [{ userAgent: `*`, disallow: `/` }],
          },
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        placeholder: `blurred`,
        backgroundColor: `transparent`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src/assets/images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: path.resolve(`src/images/icon.png`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;
