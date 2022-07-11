# QuarX

<p>
  <img width="300" src="https://avatars.githubusercontent.com/u/105634579" alt="QuarX" />
</p>

## Состав:

- QuarX-core
- QuarX-icons


### core

Пакет с набором готовых компонентов и утилит для создания веб интерфейсов.
Компоненты реализованы на базе [React](https://reactjs.org/).

[![npm ui](https://img.shields.io/npm/v/@quarx-ui/core?label=%40quarx-ui%2Fcore&style=for-the-badge)](https://www.npmjs.com/package/@quarx-ui/core)

### icons

Пакет с набором иконок

[![npm ui](https://img.shields.io/npm/v/@quarx-ui/icons?label=%40quarx-ui%2Ficons&style=for-the-badge)](https://www.npmjs.com/package/@quarx-ui/icons)

### Установка пакетов
#### QuarX-core
```sh
// Для NPM
npm install @quarx-ui/core @emotion/react @emotion/styled
 
// Для yarn
yarn add @quarx-ui/core @emotion/react @emotion/styled 
```

#### QuarX-icons
```sh
// Для NPM
npm install @quarx-ui/icons
 
// Для yarn
yarn add @quarx-ui/icons
```

### Использование
[![Storybook](https://img.shields.io/github/workflow/status/quarx-ui/quarx/Storybook/main?label=Storybook)](https://quarx-ui.github.io/quarx-storybook/main/)

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
