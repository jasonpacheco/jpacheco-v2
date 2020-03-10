const siteMetadata = {
  name: 'jpacheco.dev',
  description: 'Website for Jason Pacheco, React developer',
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: '#663399',
        background_color: 'white',
        icon: 'src/assets/favicon.png',
        lang: 'en-US',
        start_url: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Code'],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
