module.exports = {
    siteMetadata: {
        title: 'ultimate-gatsby-starter',
        titleTemplate: '%s · ultimate-gatsby-starter',
        siteUrl:
            'https://github.com/meredithmurfin/ultimate-gatsby-starter.git',
        description:
            'The ultimate starter template for a Gatsby project with TypeScript',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-typescript',
            options: {
                isTSX: true,
                allExtensions: true,
            },
        },
    ],
};
