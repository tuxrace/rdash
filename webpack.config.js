module.exports = {
  entry: {
    './dist/rdash': './rdash.js',
  },
  output: {
    filename: '[name].js',
    library: 'rdash',
    libraryTarget: 'umd'
  }
}
