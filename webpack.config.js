const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'array-x.js'
  },
  resolve: {
    alias: {
      '@array-x': path.resolve(__dirname, 'src')
    }
  }
};