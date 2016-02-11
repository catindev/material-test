'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

let APP = __dirname + '/src';

module.exports = {

	cache: true,

	entry: {
    app: null,
    vendor: [
			'angular',
			'baobab',
			'angular-route',
			'angular-animate',
			'angular-sanitize',
			'angular-material',
			'angular-data-table/release/dataTable.helpers.js',
		],
  },

  output: {
      path: __dirname + '/build',
      filename: NODE_ENV === 'development' ? '[name].bundle.js' : '[name].[hash].js'
  },

	resolve: {
    root: path.resolve(APP)
	},

  watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 100
	},

	module: {
      preLoaders: [],
	    loaders: [
		    {
		      test: /\.js$/,
		      loader: 'babel?presets[]=es2015',
		      exclude: /node_modules/
		    },
		    {
					test: /\.less$/,
					loader: "style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!less",
				},
				{
					test: /\.css$/,
					loader: "style!css",
				},
				{
						test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						loader: 'url-loader?name=assets/[hash][name].[ext]&limit=10000&mimetype=application/font-woff'
				},
				{
						test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						loader: 'file-loader?name=assets/[hash][name].[ext]'
				},
				{
						test: /\.jpg|\.png|\.mp3/,
						loader: 'file-loader?name=assets/[hash][name].[ext]'
				},
		    {
					test: /\.html$/,
					loader: 'raw'
				},
	    ]
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: APP + '/index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	],

	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null
};

if (NODE_ENV !== 'development') {
	console.log('MODE:PROD');

	// module.exports.plugins.push(
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress: {
	// 			warnings: false,
	// 			drop_console: true,
	// 			unsafe: true
	// 		}
	// 	})
	// );

	// module.exports.module.loaders.push({
	// 	test: /\.css$/,
	// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	// });
	// module.exports.plugins.push( new ExtractTextPlugin("styles.css") );

  module.exports.entry.app = APP + '/index.js';

} else {
	console.log('MODE:DEV');

  module.exports.entry.app = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
    APP + '/index.js'
  ];

}
