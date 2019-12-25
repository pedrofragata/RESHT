const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
        resolve: {
            modules: ['node_modules'],
            alias: {
                'jquery': 'jquery/dist/jquery.min.js',
                'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js',
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/_main.scss";`
            }
        }
    }
};