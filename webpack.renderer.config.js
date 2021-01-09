const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });

const test = [...rules, {
  test: /\.css$/,
  loader: 'style-loader!css-loader'
},
{
  test: /\.s[a|c]ss$/,
  loader: 'sass-loader!style-loader!css-loader'
},
{
  test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=100000'
}]

module.exports = {
  module: {
    rules: test,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
