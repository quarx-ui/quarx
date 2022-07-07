# Среда для end-to-end тестирования компонентов

Содержание документа

1. [Подготовка](#preparing)
   - [Установка playwright](#installing)
   - [Подготовка сборок](#builds)
2. [Запуск тестов](#running)
   - [Написание тестов](#writing)
   - [Ограничения](#limits)
   - [Использование дефолтного компонента](#defaultComponent)
   - [Кастомизация компонентов](#customComponents)
3. [Использование утилит для написания тестов](#utilities)
    - [initTest](#initTest)
    - [test](#test)
        - [compareSnapshotsMap](#compareSnapshotsMap)
        - [compareSnapshots](#compareSnapshots)
        - [toMatchSnapshot](#toMatchSnapshot)
        - [setProps](#setProps)
        - [getComponent](#getComponent)
    - [testProps](#testProps)
4. [Дополнительная информация](#additionalInfo)
    - [Запуск в браузере](#page)
    - [Алиасы](#aliases)
    - [Структура проекта](#structure)

## Подготовка<a id="preparing"></a>

### 1. Установка playwright<a id="installing"></a>

Для запуска тестов в данной среде используется фреймворк **[playwright](https://playwright.dev/docs/intro)**.
Если ранее на вашем компьютере этот фреймворк не использовался необходимо запустить команду:

```shell
yarn run test:init
```

После чего выполнится его **глобальная** установка на компьютер.

---

### 2. Подготовка сборок<a id="builds"></a>

Во время тестирования компоненты используют для вывода пустую страницу браузера (посредством `webpack-dev-server`).

**В папке `builds` должны находиться актуальные сборки компонентов и иконок.**

Для этого необходимо запустить команду:

```shell
yarn run e2e:build
```

Данная команда добавит актуальные сборки компонентов и иконок в папку `builds` текущей директории.

Этот шаг необходим в двух случаях:
* Первый локальный запуск тестов (папка `builds` пустая или отсутствует);
* В компоненты были внесены изменения (т.е. сборку нужно актуализировать).

---

## Запуск тестов<a id="running"></a>

Для запуска тестов в стандартном режиме из корневой директории необходимо использовать команду:

```shell
yarn run test:e2e
```

> Примечание: `playwright` автоматически запустит `dev-server`, если в момент запуска он отключен.

Для тестов будут использованы следующие браузеры (устанавливаются командой `yarn run test:init`):
* chromium
* webkit
* firefox

Для запуска теста в определенном браузере можно использовать следующие команды:

`chromium`
```shell
yarn run test:e2e:chrome
```
`webkit`
```shell
yarn run test:e2e:webkit
```
`firefox`
```shell
yarn run test:e2e:firefox
```

Для запуска конкретного теста после одной из вышеперечисленных команд можно:
* указать путь до файла - `yarn run test:e2e src/Button`
* указать название теста / describe-блока - `yarn run test:e2e -g Button`

При необходимости наблюдения за процессом тестирования используйте команду:
```shell
yarn run test:e2e --headed
```

> Совет: используйте данный режим при запуске конкретного теста в конкретном браузере, например, 
>`yarn run test:e2e:chrome Button --headed` (иначе запустятся десятки тестов)

Более подробная **[документация](https://playwright.dev/docs/test-cli)** по использованию командной строки.

---

## Написание тестов<a id="writing"></a>

### Ограничения<a id="limits"></a>

Все тестируемые свойства компонентов передаются через адресную строку браузера. Данная особенность накладывает ограничения - разрешается использовать свойства только следующих типов:
* `string`
* `number`
* `boolean`

Вследствие этого (и не только) есть два способа написания тестов: простой (по умолчанию) и посложнее (с кастомизацией). Далее будут описаны оба этих способа.

---

### Использование дефолтного компонента<a id="defaultComponent"></a>

Вся работа по тестированию компонентов ведется в директории `src`.

Для подключения компонента к среде достаточно его добавить в файле `src/index.ts` в объект `COMPONENTS` импортировав из `@kit` (алиас сборки в директории `builds/kit`):

```typescript
import { Button, Checkbox } from '@kit';

export const COMPONENTS = {
    Button,
    Checkbox,
    // здесь мог быть ваш компонент
} as const;
```

> Примечание: Объект `COMPONENTS` при вводе будет подсказывать названия компонентов имеющихся в текущей сборке кита.

Затем, необходимо создать папку (в той же директории) с именем тестируемого компонента (или любое другое удобное имя). Далее, в ней создать файл с именем `[componentName].test.pw.ts`, в котором должен быть описан сам тест.

---

###  Кастомизация компонентов<a id="customComponents"></a>

В данном случае под "кастомизацией" подразумевается создание оболочки (HOC) для тестируемого компонента, которая принимает свойства (передаваемые в тесте), обрабатывает их и возвращает целевой компонент.

Например, необходимо протестировать компонент `Button` с передачей в него левой и правой иконок. Так как используемые для этого пропсы `leftIcon` и `rightIcon` имеют тип отличный от вышеперечисленных, создается следующая оболочка:

`src/Button/Button.tsx`
```typescript jsx
import { SmthIcon } from '@kit-icons';
import { Button as KitButton } from '@kit';
import { TestButtonProps } from './types';

export const Button: FC<TestButtonProps> = ({
    children = 'Button',
    leftIcon,   // boolean
    rightIcon,  // boolean
    ...props
}) => {
    return (
        <KitButton
            leftIcon={leftIcon ? <SmthIcon/> : undefined}
            rightIcon={rightIcon ? <SmthIcon/> : undefined}
            {...props}
        >
            {children}
        </KitButton>
    )
}
```

`src/Button/types.ts`
```typescript
import { ButtonProps } from '@kit';

export interface TestButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
    leftIcon?: boolean,
    rightIcon?: boolean,
}
```

В данном примере можно отметить сразу несколько моментов:
* Интерфейс `TestButtonProps` переписывает дефолтный интерфейс компонента `Button`, заменяя тип целевых свойств на  `boolean`, что позволит в тесте путем передачи `true`/`false` включить/отключить иконку.
* Можно установить значения по умолчанию для некоторых свойств, что позволит не передавать в каждом тесте одни и те же состояния, в данном случае для свойства `children` устанавливается строка `'Button'`.
* Компонент `Button` из данного файла необходимо поместить в объект `COMPONENTS` в файле `src/index.ts` вместо импортируемого из сборки:

```typescript
import { Checkbox } from '@kit';
import { Button } from '@e2e/Button'

export const COMPONENTS = {
    Button, // это компонет из примера выше 
    Checkbox,
    // здесь мог быть ваш компонент
} as const;
```

Таким образом, можно заранее писать сложные сценарии использования компонентов, включаемые/отключаемые определенными пропсами.

---

## Использование утилит для написания тестов<a id="utilities"></a>

### `initTest`<a id="initTest"></a>

В начале теста происходит инициализация с помощью функции `initTest`, которая принимает название тестируемого компонента и возвращает объект с утилитами:
```typescript
import { initTest } from '@e2e/test-utils/initTest';
import { TestButtonProps } from '../types';

const { test, testProps } = initTest<TestButtonProps>('Button'); 
```

Для дополнительной типизации принимаемых утилит можно передать интерфейс тестируемого компонента. В данном случае используется кастомный интерфейс `TestButtonProps`, который был создан в примере выше.

---

### `test`<a id="test"></a>

Используется точно так же, как стандартная функция тестирования в `playwright` или в `jest`:
```typescript
test('Button', async () => {
    // ...
})
```

Отличие данной функции от дефолтной в том, что передаваемый `callback` принимает дополнительные параметры:
```typescript
test('Button', async ({
    compareSnapshotsMap,
    toMatchSnapshot,
    setProps,
    getComponent,
    page,
}) => {
    // ...
});
```

* `compareSnapshotsMap` - Принимает свойства в виде массива, для которых создает и сравнивает скриншоты (одно свойство - один скриншот).
* `compareSnapshots` - Принимает свойства в виде объекта, для которых создает и сравнивает один скриншот (все свойства одновременно применяются к компоненту)
* `toMatchSnapshot` - Принимает имя и селектор компонента (опционально), для которого создает и сравнивает скриншот
* `setProps` - Принимает объект свойств, которые помещает в адресную строку браузера (применяются к компоненту)
* `getComponent` - Принимает селектор компонента (опционально) и возвращает локатор компонента
* `page` - Стандартный объект **[страницы](https://playwright.dev/docs/pages)** `playwright`

**Пример использования `compareSnapshotsMap`:**<a id="compareSnapshotsMap"></a>
```typescript
await compareSnapshotsMap({
    targetProps: {
        color: ['brand', 'success', 'warning', 'danger'],
        checked: [false],
    },
    commonProps: {
        children: 'Checkbox',
        checked: true,
    },
    timeout: 100,
    state: 'focus',
    postfix: 'focus',
});
```

* `targetProps` - объект с целевыми свойствами, для которых будут созданы скриншоты
* `commonProps` - объект с общими свойствами, которые будут применены при каждом скриншоте
* `timeout` - задержка (ms), которую необходимо произвести перед созданием скриншота (например, для применения анимаций)
* `state` - дополнительное состояние, которое необходимо применить для компонента (`hover`, `focus`, `press`). Так в большинстве компонентов для перечисленных событий стили применяются с плавностью, перед созданием скриншота создается задержка 200ms
* `postfix` - строка, которая будет добавлена в названии каждого скриншота
* `beforeSnap` - функция, которая будет выполнена перед созданием скриншота (если передан `timeout`, функция будет вызвана после него)
* `quality` - качество создаваемых скриншотов, числовое значение 0-100

**Пример использования `compareSnapshots`:**<a id="compareSnapshots"></a>
```typescript
await compareSnapshots({
    props: {
        leftIcon: true,
        rightIcon: true,
    },
    postfix: 'icon',
});
```
Интерфейс данной функции отличается от `compareSnapshotsMap` только отсутствием свойств `targetProps` и `commonProps`. Вместо них используется свойство `props`:
* `props` - объект со свойствами, которые будут применены к компоненту

Все остальные свойства идентичные и выполняют ту же роль.

**Пример использования `toMatchSnapshot`:**<a id="toMatchSnapshot"></a>
```typescript
await toMatchSnapshot('Button-screenName');
await toMatchSnapshot('Button-screenName-second', '#uniqSelectorToComponent');
```
Данная функция создаст скриншот с именем `Button-screenName.jpeg`. Если селектор не указан (второй аргумент), поиск компонента будет осуществлен по имени класса `.SxComponentName`.

**Пример использования `setProps`:**<a id="setProps"></a>
```typescript
await setProps({
    size: 'medium',
    children: 'Button',
    leftIcon: true,
    color: 'secondary',
});
```
Данные свойства будут вставлены в адресную строку браузера в следующем виде:
`size=medium;children=Button;leftIcon=true;color=secondary`
после чего они будут применены к компоненту.

**Пример использования `getComponent`:**<a id="getComponent"></a>
```typescript
const component = await getComponent();
await getComponent().hover();
await getComponent('#uniqSelector');
```

Данная функция возвращает стандартный **[локатор](https://playwright.dev/docs/locators)** `playwright`. Если селектор не был передан, поиск компонента будет осуществлен по имени класса `.SxComponentName`.

---

### `testProps`<a id="testProps"></a>

Данная утилита - аналог функции `compareSnapshotsMap`, за исключением некоторых особенностей:
* Создает внутри себя отдельный тест, соответственно нельзя использовать внутри утилиты `test`
* Принимает два аргумента, где первый - имя теста, второй - объект (тот же, что и в `compareSnapshotsMap`)
* Не принимает параметр `postfix`, так как каждый тест изначально имеет уникальное название
* Параметр `state` используется в качестве `postfix` в названии создаваемых скриншотов

**Пример использования `testProps`:**
```typescript
testProps('IconButton', {
    targetProps: {
        borderRadius: ['square', 'rounded'],
        size: ['xSmall', 'small', 'medium', 'large'],
        color: ['secondary', 'success', 'info', 'warning', 'danger'],
        disabled: [true],
    },
    state: 'hover',
    timeout: 450,
});
```
---

> Примечание: Также объект возвращаемый `initTest` содержит функции: `describe`, `expect`, `afterAll`, `afterEach`, `beforeAll`, `beforeEach`. Это стандартные функции `playwright`, которые были реэкспортированы для удобства обращения к ним.

## Дополнительная информация
<a id="additionalInfo"></a>

### Запуск в браузере
<a id="page"></a>

Для запуска проекта в браузере без тестов необходимо использовать команду:
```shell
yarn run e2e:serve
```
После чего по адресу **[http://localhost:6013](http://localhost:6013)** откроется пустая страница.

Для отображения компонента в адресную строку нужно добавить имя компонента, например: 

**[http://localhost:6013/Button](http://localhost:6013/Button)**.

Для передачи свойств после двойного дефиса (`--`) добавляются пропсы в формате `[prop]=[value];[prop2]=[value2]`, например:

**[http://localhost:6013/Button--color=secondary;size=small;borderRadius=square](http://localhost:6013/Button--color=secondary;size=small;borderRadius=square)**.

---

### Алиасы<a id="aliases"></a>

В директории `e2e` используются следующие алиасы:

| Алиас        | Обозначение                                          |
|:-------------|:-----------------------------------------------------|
| `@e2e`       | Текущая директория                                   |
| `@kit`       | Сборка компонентов в папке `builds/kit`              |
| `@kit-icons` | Сборка проекта с иконками в папке `builds/kit-icons` |

---

### Структура проекта<a id="structure"></a>

| Папка          | Обозначение                                                                                      |
|:---------------|:-------------------------------------------------------------------------------------------------|
| `builds`       | В данную папку складываются сборки компонентов и иконок                                          |
| `src`          | Все тесты пишутся здесь                                                                          |
| `public`       | Папка содержит файлы, которые рендерятся в браузере                                              |
| `constants`    | Все константы используемые в проекте складываются сюда (в том числе разделители адресной строки) |
| `render-utils` | Все утилиты используемые при рендеринге компонентов                                              |
| `utils`        | Общеиспользуемые утилиты                                                                         |
| `test-utils`   | Утилиты используемые в тестах                                                                    |
