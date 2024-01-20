const { addBabelPlugins, override } = require('customize-cra');
module.exports = override(...addBabelPlugins('tempo-devtools/dist/babel-plugin'));