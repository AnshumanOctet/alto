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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/content/`, 
      },
    },
 
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,

  ],
  // plugins: [`gatsby-plugin-layout`]

};