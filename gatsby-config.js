module.exports = {
    siteMetadata: {
        title: 'customizable-gatsby-starter',
        titleTemplate: '%s · customizable-gatsby-starter',
        siteUrl:
            'https://github.com/meredithmurfin/customizable-gatsby-starter.git',
        description:
            'A customizable starter template for a Gatsby project with TypeScript',
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
