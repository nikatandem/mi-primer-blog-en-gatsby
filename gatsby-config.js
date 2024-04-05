/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nikatandem Gatsby's blog`,
    description: `Made in Aranjuez city`,
    siteUrl: `https://nikatandem.github.io`,
    iconUrl:`../images/icon.png`,
  },
plugins: [
   "gatsby-plugin-image",
   "gatsby-plugin-sharp",
   {
     resolve: "gatsby-source-filesystem",
     options: {
       name: `blog`,
       path: `${__dirname}/blog`,
     }
   },
   "gatsby-plugin-mdx",
 ],
};
