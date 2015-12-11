var path = require('path');

module.exports = {
  entry:{
    angular2:[
      'zone.js',
      'reflect-metadata',
      'angular2/angular2',
      'angular2/router',
      'angular2/core'
    ],
    app:[
      path.resolve(__dirname, 'src/index.ts')
    ]
  },

  output:{
     path: path.resolve(__dirname, 'build'),
     filename: '[name].js',
     sourceMapFilename: '[name].js.map',
     chunkFilename: '[id].chunk.js'
  },

  module:{
    loaders:[
        // Support for *.json files.
        { test: /\.json$/,  loader: 'json' },
        // Support for CSS as raw text
        { test: /\.css$/,   loader: 'raw' },
        // support for .html as raw text
        { test: /\.html$/,  loader: 'raw' },
        // Support for .ts files.
        { test: /\.ts$/,    loader: 'ts' }
    ]
  }
}
