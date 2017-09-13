var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: "./app/script.jsx",
	output:{
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: "/dist"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader:"babel-loader"},
			{ test: /\.scss$/, exclude: /node_modules/, loaders:["style-loader","css-loader","sass-loader"]}
  		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	devServer:{
		contentBase: path.join(__dirname, "public"),
		port: 8080
	}
};
