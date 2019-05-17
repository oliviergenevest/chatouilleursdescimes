const dotenv = require("dotenv");
const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { GOOGLE_MAPS_API_KEY } = process.env;
const { FACEBOOK_GRAPH_TOKEN } = process.env;
 
module.exports = { 
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
  }, 
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packs',
        path: `${__dirname}/content/packs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'partenaires',
        path: `${__dirname}/content/partenaires`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`,
      },
    },
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`chatouilleursdescimes`], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { id,from,name,message,created_time,story,description,link,picture,object_id }', // See Facebooks API to see what you can query for
        },
        key: FACEBOOK_GRAPH_TOKEN, 
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
     {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pdf',
        path: `${__dirname}/src/pdf`,
      },
    },
  

 /*  ONLY FOR PRODUCTION
    { 
      resolve: `gatsby-plugin-cookiehub-modif`,
      options: {
        // your cookiehub widget ID
        cookihubId: "c9710f92",
        // your google analytics tracking id
        trackingId: config.googleAnalyticsID,
        gtagId: config.googleAnalyticsID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,        
      },
    },*/
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}