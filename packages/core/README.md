# QuarX
<p>
  <img
    width="300"
    alt="QuarX"
    src="https://avatars.githubusercontent.com/u/105634579"
  />
</p>

### core
Пакет с набором готовых компонентов и утилит для создания веб интерфейсов.
Компоненты реализованы на базе [React](https://reactjs.org/).

[![npm ui](https://img.shields.io/npm/v/@quarx-ui/core?label=%40quarx-ui%2Fcore&style=for-the-badge)](https://www.npmjs.com/package/@quarx-ui/core)

### Установка пакета
#### QuarX-core
```sh
# Для NPM
npm install @quarx-ui/core @emotion/react @emotion/main
 
# Для yarn
yarn add @quarx-ui/core @emotion/react @emotion/main 
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
