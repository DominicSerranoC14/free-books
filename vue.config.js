module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/free-books/'
        : '/',

    css: {
        loaderOptions: {
            css: {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        },
    },

    outputDir: 'docs'
};