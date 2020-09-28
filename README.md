# Via Profit Eslint configuration

![via-profit-eslint-cover](./assets/via-profit-eslint-cover.png)

> ESlint конфигурация для проктов [via-profit-services](https://gitlab.com/via-profit-services)


![version-badge](https://img.shields.io/static/v1?label=version&message=0.1.2&color=blue)

## Зависимости
 - [eslint](https://www.npmjs.com/package/eslint)
 - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
 - [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
 - [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
 - [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
 - [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
 - [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
 - [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
 - [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
 - [prettier](https://www.npmjs.com/package/prettier)
 - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
 - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

## Установка

1. Установите зависимости:

```bash
yarn add --dev \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint \
eslint-config-prettier \
eslint-config-standard \
eslint-import-resolver-webpack \
eslint-plugin-import \
eslint-plugin-node \
eslint-plugin-prettier \
eslint-plugin-promise \
eslint-plugin-standard \
eslint-plugin-react \
prettier
```

2. Установите основной пакет:

```bash
yarn add --dev ssh://git@gitlab.com:via-profit-services/eslint-config.git#semver:^0.1.2
```

3. Создайте файл конфигурации `.eslintrc.js` в корневом каталоге проекта со следующим содержимым:

#### Для Nodejs (сервер)

```js
module.exports = {
  extends: ['@via-profit-services/eslint-config'],
}
```

#### Для Nodejs и React

```js
module.exports = {
  extends: ['@via-profit-services/eslint-config/react']
};

```

Если в проекте применяются алиасы, то добавьте соответствующие настройки:

```js
const path = require('path');

module.exports = {
  extends: [
    '@via-profit-services/eslint-config/react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './webpack/webpack.config.base.js'), // <-- Path to your local webpack config
      },
    },
  },
};

```

4. Создайте файл `.eslintignore` в корневом каталоге проекта:

```
/scripts/**
/src/@types/**
/dist/**
/build/**
.eslintrc.js
```