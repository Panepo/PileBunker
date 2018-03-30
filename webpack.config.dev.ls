require! {
	"html-webpack-plugin": HtmlWebpackPlugin
	"path": path
	"webpack": webpack
}

webpackConfig = {
	devtool: "sourcemap"
	entry: [
		#'webpack-hot-middleware/client'
		"./src/index.jsx"
	]
	output: {
		path: path.join(__dirname, 'build')
		filename: 'bundle.js'
	}
	plugins: [
		new HtmlWebpackPlugin {
			path: path.join(__dirname, 'build')
			template: './src/index.html'
			hash: false
			inject: 'body'
			minify: {
				collapseWhitespace: true
			}
		}
		new webpack.HotModuleReplacementPlugin()
		new webpack.NoErrorsPlugin()
	]
	resolve:{
		alias:{
		}
		extensions: ['', '.ls', '.js', '.json', '.jsx']
	}
	module: {
		preLoaders: [
			{
				test: /\.js[x]?$/
				loader: 'eslint'
				include: path.join(__dirname, 'src')
			}
		]
		loaders: [
			{
				test: /\.js[x]?$/
				loaders: [ "react-hot", "babel" ]
				include: path.join(__dirname, 'src')
			}
			{
				test: /\.ls$/
				loaders: [ "react-hot", "livescript" ]
				include: path.join(__dirname, 'src')
			}
			{
				test: /\.json/
				loaders: [ "json" ]
				include: path.join(__dirname, 'raw')
			}
			{
				test: /\.(css|scss)$/
				loaders: [ 'style', 'css', 'sass' ]
				include: path.join(__dirname, 'css')
			}
			{
				test: /\.(png|jpg)$/
				loaders: [ 'url-loader' ]
				include: path.join(__dirname, 'image')
			}
		]
	}
	node: {
		fs: "empty"
	}
}

module.exports = webpackConfig