const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'assets/javascript'),
    entry: {
        hangman: './hangman.js',
        hangmanStyle: './hangmanStyle.js'
    }, 
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'assets/javascript/webpack')
    }, 
    watch: true
}