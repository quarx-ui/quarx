# QuarX

<p>
  <img
    width="100%"
    alt="QuarX"
    src="https://raw.githubusercontent.com/quarx-ui/quarx-storybook/content/cover.png"
  />
</p>

[![Storybook](https://img.shields.io/github/workflow/status/quarx-ui/quarx/Storybook/main?label=Storybook)](https://quarx-ui.github.io/quarx-storybook/main/)

[![GitHub Core](https://img.shields.io/github/package-json/v/quarx-ui/quarx?filename=packages%2Fcore%2Fpackage.json&label=GitHub%3A%20%40quarx-ui%2Fcore%3A)](https://github.com/quarx-ui/quarx/tree/main/packages/core)
[![NPM Core](https://img.shields.io/npm/v/@quarx-ui/core/latest?label=NPM:%20%40quarx-ui%2Fcore)](https://www.npmjs.com/package/@quarx-ui/core)    
[![GitHub Icons](https://img.shields.io/github/package-json/v/quarx-ui/quarx?filename=packages%2Ficons%2Fpackage.json&label=GitHub%3A%20%40quarx-ui%2Ficons%3A)](https://github.com/quarx-ui/quarx/tree/main/packages/icons)
[![NPM Icons](https://img.shields.io/npm/v/@quarx-ui/icons/latest?label=NPM:%20%40quarx-ui%2Ficons)](https://www.npmjs.com/package/@quarx-ui/icons)

## Состав:

- QuarX-core
- QuarX-icons


### core

Пакет с набором готовых компонентов и утилит для создания веб интерфейсов.
Компоненты реализованы на базе [React](https://reactjs.org/).

[![NPM Core](https://img.shields.io/npm/v/@quarx-ui/core?label=%40quarx-ui%2Fcore&style=for-the-badge)](https://www.npmjs.com/package/@quarx-ui/core)

### icons

Пакет с набором иконок

[![NPM Icons](https://img.shields.io/npm/v/@quarx-ui/icons?label=%40quarx-ui%2Ficons&style=for-the-badge)](https://www.npmjs.com/package/@quarx-ui/icons)

### Установка пакетов
#### QuarX-core
```sh
# Для NPM
npm install @quarx-ui/core @emotion/react @emotion/styled
 
# Для yarn
yarn add @quarx-ui/core @emotion/react @emotion/styled 
```

#### QuarX-icons
```sh
# Для NPM
npm install @quarx-ui/icons
 
# Для yarn
yarn add @quarx-ui/icons
```

### Использование
```jsx
// ./src/App.jsx
import React from 'react';

import { Button } from '@quarx-ui/core';

function App() {
    return (
        <div className="App">
            <Button>Hello World!</Button>
        </div>
    );
}
```


## Обратная связь

Разработка дизайн-системы ведется в репозитории https://github.com/quarx-ui/quarx.
