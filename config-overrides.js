// Override create-react-app webpack configs without ejecting
// https://material-ui.com/guides/minimizing-bundle-size
// https://ant.design/docs/react/use-with-create-react-app#Advanced-Guides
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('@material-ui/core', {
    libraryDirectory: 'esm',
    camel2DashComponentName: false,
  }),
  fixBabelImports('@material-ui/lab', {
    libraryDirectory: 'esm',
    camel2DashComponentName: false,
  }),
);

