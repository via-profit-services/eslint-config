/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('../index');

const reactConfig = { ...baseConfig };
reactConfig.env.browser = true;
reactConfig.extends.push('plugin:react/recommended');
reactConfig.plugins.push('react');
reactConfig.settings = {
  ...baseConfig.settings || {},
  react: {
    pragma: 'React',
    version: 'detect',
  },
}
reactConfig.rules = {
  ...baseConfig.rules,
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: true,
    },
  ],
  'react/prop-types': 'off',
  'react/destructuring-assignment': ['error', 'always'],
  'react/no-array-index-key': ['warn'],
  'react/no-multi-comp': ['error', { ignoreStateless: true }],
  'react/jsx-indent': ['warn', 2],
  'import/max-dependencies': ['warn', { max: 20 }],
};

module.exports = reactConfig;