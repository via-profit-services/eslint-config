# Via Profit Eslint configuration

![via-profit-eslint-cover](./assets/via-profit-eslint-cover.png)

> ESlint configuration for a [via-profit-services](https://github.com/via-profit-services) packages


![npm (scoped)](https://img.shields.io/npm/v/@via-profit-services/eslint-config?color=blue)

## Peer Dependencies
 - [eslint](https://www.npmjs.com/package/eslint)
 - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
 - [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
 - [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
 - [eslint-import-resolver-node](https://www.npmjs.com/package/eslint-import-resolver-node)
 - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
 - [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
 - [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
 - [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
 - [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
 - [prettier](https://www.npmjs.com/package/prettier)
 - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
 - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

## Installation

1. Install peer dependencies:

```bash
yarn add --dev \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint \
eslint-config-prettier \
eslint-config-standard \
eslint-import-resolver-webpack \
eslint-import-resolver-node \
eslint-plugin-import \
eslint-plugin-node \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-standard \
eslint-plugin-react \
prettier
```

2. Install the common package:

```bash
yarn add --dev @via-profit-services/eslint-config
```

3. Make the eslint config file `.eslintrc` in project root with following contents:

```json
{
  "extends": [
    "@via-profit-services/eslint-config"
  ]
}
```

#### For React environment

```json
{
  "extends": [
    "@via-profit-services/eslint-config/react"
  ]
}
```


4. Make the `.eslintignore` file in project root with following contents:

```
/scripts/**
/src/@types/**
/dist/**
/build/**
.eslintrc.js
```

5. Do not forgot restart your IDE