/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `alto`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [

    {
      resolve: `gatsby-source-filesystem`,
      options: {
       name: `images`,
      path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
       name: `content`,
      path: `${__dirname}/src/content/`,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`

  ],
  // plugins: [`gatsby-plugin-layout`]

};