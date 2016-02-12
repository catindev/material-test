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
    vendors: [
			'angular/angular.js',
			'baobab',
			'livr',
			'angular-route',
			'angular-animate',
			'angular-sanitize',
			'angular-material',
			'angular-data-table/release/dataTable.helpers.js',
			'angular-file-upload',
			'superagent',
		],
  },

  // output: {
  //     path: __dirname + '/public',
  //     filename: '[name].[hash].js'
  // },

	output: {
	    path: 'D:/dev/bank/backend/legal-dep-service-api/target/classes/static',
	    filename: '[name].[hash].js'
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
					loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!less'
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract(
						'style-loader',
						'css'
					)
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
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: APP + '/index.html',
			inject: 'body',
			filename: './request.html'
		}),
		new webpack.optimize.CommonsChunkPlugin(
			'vendors', 'vendors.[hash].js'
		),
		new ExtractTextPlugin('common.[hash].css', { allChunks: true })
	],

	devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null
};

if (NODE_ENV !== 'development') {
  module.exports.entry.app = [ APP + '/index.js'] ;
} else {
  module.exports.entry.app = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
    APP + '/index.js'
  ];

}
