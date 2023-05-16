Существует несколько способов локально и глобально кастомизировать компоненты дизайн-системы.
Доступны как стандартные способы кастомизации, используемые везде, так и специфичные, доступные только для QuarX.

## Оглавление

- Локальная кастомизация
  - Пропс className
  - Пропс css
  - Пропс styles
  - Пропс classes
- Глобальная кастомизация
  - Глобальный css и БЭМ
  - Theme и ThemeProvider

## Локальная кастомизация

### Пропс className

Компоненты дизайн-системы поддерживают стандартную кастомизацию через передачу пропса `className`
и последующее назначение стилей для этого `className` любым удобным способом. Это могут быть как глобальные стили,
прописанные в css-файлах (в том числе с использованием пре-процессоров), так и различные вариации css-модулей
или CSS-in-JS стилей, опирающихся на `className`, например `styled()` в Styled Components и в Emotion.

#### Пример

```css
/* my-component.css */

.my-component {
    font-size: 20px;
}
```

```jsx
import 'my-component.css'

const App = () => (
    <Button className="my-component">Hello World</Button>
)
```

### Пропс css

Дизайн-система построена на Emotion и требует установку этой библиотеки в проект. Поэтому можно считать,
что использование возможностей Emotion доступно для неё по-умолчанию. В таких условиях, самый простой вариант
точечной кастомизации компонента – это прямая передача стилей в пропс `css`. Для того, чтобы такие стили применились,
нужно импортировать `jsx` из `@emotion/react` вместо React, либо настроить плагин для сборщика. Подробности доступны
в [официальной документации Emotion](https://emotion.sh/docs/css-prop).

#### Пример

```jsx
/** @jsx jsx */
import { jsx } from '@emotion/react'

const App = () => (
    <Button css={ { fontSize: '20px' } }>Hello World</Button>
)
```

### Пропс styles

Пропс `styles` можно использовать для передачи стилей во внутренние элементы компонента. Например, компонент `Button`
содержит несколько внутренних элементов, один из которых называется `leftIcon`. Посмотреть имя элемента можно в списке
классов в DOM-дереве, классы строятся по шаблону БЭМ: `Qx{имя компонента}-{имя элемента}`.

В пропс `styles` передается объект или функция, возвращающая объект, в котором ключами являются имена элементов
компонента, а значениями – объекты со стилями, которые необходимо присвоить этим элементам. В качестве аргументов
функция может принимать тему, динамические параметры компонента, а также имена css-переменных, 
используемых внутри компонента.

#### Пример
```jsx
const App = () => (
    <>
        <Button
            styles={ {
                root: {
                    fontSize: '20px',
                },
                leftIcon: {
                    marginRight: '12px',
                },
            } }
        >
            Hello
        </Button>
        <Button
            styles={(theme, params, cssVars) => ({
                root: {
                    color: theme.palette.text.main,
                    [cssVars.cssIconMinSize]: '20px'
                },
                leftIcon: {
                    marginRight: params.loading ? '8px' : '12px',
                },
            })}
        >
            Hello
        </Button>
    </>
)
```

### Пропс classes

Пропс `classes` работает аналогично пропсу `styles`, но вместо стилей принимает в качестве значений объекта
имена классов, которые дополнительно назначает соответствующим внутренним элементам. Этот подход можно комбинировать
с обычными css-стилями, которые обращаются к элементу по имени класса.

#### Пример

```css
/* button.css */

.left-icon {
    font-size: 20px;
}
```

```jsx
import 'button.css'

const App = () => (
    <Button
        classes={ { leftIcon: 'left-icon' } }    
    >
        Hello World
    </Button>
)
```

## Глобальная кастомизация

### Глобальный css и БЭМ

Все компоненты дизайн-системы построены по [методологии наименования классов БЭМ](https://ru.bem.info/methodology/quick-start/).
Все имена классов для компонентов начинаются с префикса **Qx**. Корневое имя класса для компонента строится по шаблону:
`Qx{имя компонента}` и `Qx{имя компонента}-root`. Все модификаторы, влияющие на стили компонента, назначаются корневому
элементу. Все внутренние элементы компонента, имеющие собственные стили, также имеют имя класса, построенное по шаблону:
`Qx{имя компонента}-{имя элемента}`.

Использование методологии БЭМ в контексте дизайн-системы позволяет с помощью глобальных css-стилей кастомизировать
конкретные компоненты в приложении, либо отдельные элементы компонентов, либо компоненты в определенных состояниях.

#### Пример

```css
/* custom-global.css */

.QxButton {
    font-size: 20px;
}

.QxButton_size_small {
    font-size: 14px;
}

.QxButton-leftIcon {
    margin-right: 12px;
}
```

```jsx
import 'custom-global.css'

const App = () => (
    <Button>Hello World</Button>
)
```

## Theme и ThemeProvider

Дизайн-система поддерживает гибкую кастомизацию компонентов через глобальный объект `theme` и `ThemeProvider`.
Доступно несколько вариантов глобальной кастомизации компонентов:
- изменение базовых стилей темы (палитра, типографика, анимации и тд)
- изменение стандартных пропсов компонентов
- изменение базовых стилей компонентов

Все перечисленные изменения доступны при создании объекта глобальной темы с помощью функции `createTheme()`.
Тема содержит в себе все базовые стили, которые в дальнейшем используются в компонентах. Эти стили можно переопределить,
тогда стилизация всей дизайн-системы изменится соостветствующим образом.

### Использование темной темы

По-умолчанию дизайн-система поддерживает светлую и темную тему. Для включения темной темы можно создать объект `theme`
с помощью функции `createTheme()` и в аргументе для палитры указать тип `dark`.


#### Пример

```jsx
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@quarx-ui/core'

const theme = createTheme({
    palette: {
        type: 'dark'
    }
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Button>Hello World</Button>
    </ThemeProvider>
)
```

### defaultProps

Отдельно стоит отметить поле `defaultProps` – это объект, в котором ключами являются имена компонентов, а в качестве
значений передаются стандартные пропсы, которые будут применены ко всем компонентам дизайн-системы с соответствующим
именем, которые находятся в контексте `ThemeProvider`.

#### Пример

```jsx
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@quarx-ui/core'

const theme = createTheme({
    defaultProps: {
        Button: {
            type: 'outlined',
            size: 'small',
        }
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Button>Hello World</Button>
    </ThemeProvider>
)

```

### defaultStyles

Параметр `defaultStyles` – аналогичный объект, но в качестве значений в него передаются стили для пропса styles.
Ключевой особенностью и отличием от передачи `styles` в `defaultProps` является то, что при дальнейшем использовании
компонента в коде и передаче в него локальных стилей через `styles`, объект со стилями из `defaultProps` будет
полностью перезаписан на новый, а объект со стилями из `defaultStyles` будет не перезаписан, а дополнен 
локальными стилями.

#### Пример

```jsx
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@quarx-ui/core'

const theme = createTheme({
    defaultStyles: {
        Button: {
            root: {
                fontSize: '20px'
            }
        }
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Button>Hello World</Button>
    </ThemeProvider>
)
```