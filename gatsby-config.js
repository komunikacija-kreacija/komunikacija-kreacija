module.exports = {
  siteMetadata: {
    title: "Komunikacija je kreacija",
    subtitle: "by Nataša Muc",
    description:
      "Komunikacija, kreacija, pogovor, pogovarjati se, slišati, poslušanje, pomoč, svetovanje, sprememba, naučiti se, zdrav odnos, odnosi, partner, otrok, družba, služba, okolica, blog, delavnice, vilinski simboli, origami, ptica",
    url: "www.komunikacija-kreacija.si",
    author: "Maja L",
  },
  plugins: [
    // `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`, // for the path you can change it based on your preferred folder structure
      },
    },

    /*  "gatsby-plugin-sharp", */
    "gatsby-transformer-sharp",
    /*  "gatsby-disable-404", */

    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-offline",
    /* "gatsby-plugin-layout", */
    "gatsby-theme-gallery",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Komunikacija je kreacija",
        short_name: "komunikacija-kreacija",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/icons/kom-kr-logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        // enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
        manualInit: false,
        name: "test",
      },
    },
    // ... other plugins
  ],
}

/* require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) */
