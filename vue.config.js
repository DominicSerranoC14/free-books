module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/free-books/'
        : '/',

    outputDir: 'docs'
};