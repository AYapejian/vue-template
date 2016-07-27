const path    = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const CONFIG = {
    PATHS: {
        ENTRY_FILE:   './client/index.js',
        SRC:          path.resolve(__dirname, 'client/src'),
        ASSETS:       path.resolve(__dirname, 'client/src/assets'),
        OUTPUT_PATH:  path.resolve(__dirname, 'dist'),
        NODE_MODULES: path.join(__dirname,    'node_modules')
    },
    LOADERS: {
        NODE_MODULES_TEST: /node_modules/
    }
};

module.exports = {
    entry: CONFIG.PATHS.ENTRY_FILE,
    output: {
        path:       CONFIG.PATHS.OUTPUT_PATH,
        publicPath: '/',
        filename:   'build.js'
    },
    resolve: {
        extensions: [ '', '.js', '.vue' ],
        fallback:   CONFIG.PATHS.NODE_MODULES,
        alias: {
            src:          CONFIG.PATHS.SRC,
            assets:       CONFIG.PATHS.ASSETS,
            node_modules: CONFIG.PATHS.NODE_MODULES
        }
    },
    resolveLoader: {
        root: CONFIG.PATHS.NODE_MODULES,
    },
    module: {
        loaders: [
            {
                test:   /\.vue$/,
                loader: 'vue'
            },
            {
                test:    /\.js$/,
                loader:  'babel',
                exclude: CONFIG.LOADERS.NODE_MODULES_TEST
            },
            {
                test:   /\.css$/,
                loader: 'vue-style-loader!css-loader!postcss-loader'
            },
            {   test:   /\.postcss$/,
                loader: 'vue-style-loader!css-loader!postcss-loader'
            },
            {
                test:    /\.scss$/,
                loader: 'vue-style-loader!css-loader!sass-loader'
            },
            {
                test:   /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name:  path.join(CONFIG.PATHS.OUTPUT_PATH, 'img/[name].[hash:7].[ext]')
                }
            },
            {
                test:   /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name:  'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'client/index.html',
            inject:   true
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo:             true,
        proxy: {
            '/api/*':  { target: 'http://localhost:3001' },
            '/auth/*': { target: 'http://localhost:3001' }
        }
    },
    vue: {
        loaders: {
            css:     'vue-style-loader!css-loader',
            postcss: 'vue-style-loader!css-loader',
            scss:    'vue-style-loader!css-loader!sass-loader'
        }
    },
    devtool: '#source-map'
};


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]);
}
