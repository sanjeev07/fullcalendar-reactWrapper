const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    /** This section is basically the hook for letting the webpack scan your code
     * to find that right set of files to bundle up for the library you would
     * want to expose. In my case, the file inside src/components is where 
     * I have the file to be provided as a library.
     * This section is also known as entry point
     */
    './src/index.js'
  ],
  output: {
    /** This section takes care of outputting the entire set of files 
     * scanned from the entry point to the loader module of include/exclude
     * directories as a bundled file.
     */
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    /** Very important: the target type for our library tells us how to 
     *  export the ES6 react component for others to use and also to be able to
     *  find the component from node_modules. 
     *  The UMD pattern typically attempts to offer compatibility with the
     *  most popular script loaders of the day (e.g RequireJS amongst others).
     *  In many cases it uses AMD as a base, with special-casing added to handle
     *  CommonJS compatibility.
     */
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /build|node_modules|styles/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  /** "externals" property on the config object "to specify dependencies for
   *  your library that are not resolved by webpack, 
   *  but become dependencies of the output.
   * This means they are imported from the envirnoment while runtime.
   */
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};



/*var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var libraryName = 'index';
var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}


var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: 'React',
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;*/