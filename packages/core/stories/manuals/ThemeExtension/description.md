Для определенных типов и интерфейсов темы реализована возможность расширения.

Например, в стандартном списке основных цветов палитры (theme.palette.colors) содержится 6 наименований:
- brand;
- secondary;
- info;
- success;
- warning;
- danger.

Однако с помощью расширения в данный список можно добавить собственный набор:
- brand;
- secondary;
- info;
- success;
- warning;
- danger;
- **color1**;
- **color2**;
- **color3**.

В пропсах компонентов, которые используют данный объект, Typescript обработает кастомное поле без ошибок.

Например, у компонента `Button` есть пропс `color`, который использует список цветов палитры.
Раньше попытка передать значение `color2` вызвала бы ошибку, но после расширения это будет корректно обработано.
Редактор кода также будет предлагать уже обновленную версию списка.

```tsx
<Button color="color2">
    Это кнопка с кастомным цветом
</Button>
```

Далее представлены обязательные шаги, необходимые для расширения.

###1. Создание файла
В любом удобном месте (в рамках директории `src`) и с любым названием (расширение: `.d.ts`), например, `quarx-ui.d.ts`.

###2. Импорт библиотеки:

```ts

import { CustomUnionType } from '@quarx-ui/core';

```
**Важно**: импорт обязателен для корректной типизации модуля.
Если в файле нечего импортировать, стоит использовать запись:

```ts

import '@quarx-ui/core';

```

###3. Декларация модуля

```ts
import '@quarx-ui/core';

declare module '@quarx-ui/core' {
    // здесь определение типов
}
```

Внутри декларации указываются типы, которые необходимо расширить.
Для этого нужно конкретному типу/интерфейсу указать нужное значение.
Названия типов, которые можно расширить, указаны в следующем формате: `Custom[TypeName]`.

Например, если необходимо расширить интерфейс палитры `Palette`, то новые свойства следует указать в интерфейсе `CustomPalette`:

```ts
import '@quarx-ui/core';

declare module '@quarx-ui/core' {
    interface CustomPalette {
        prop1: string,
        prop2: number,
        prop3: string[],
        prop4: {
            subProp1: string,
            subProp2: number,
        }
    }
}
```

Причем использовать можно синтаксис как `interface` так и `type`.
Таким образом, указанные свойства добавятся к существующим в интерфейсе `Palette`.

При необходимости расширения union-типов, есть два варианта:
1. Импортировать из библиотеки дженерик `CustomUnionType`, в который помещаются нужные свойства:

```ts
import { CustomUnionType } from '@quarx-ui/core';

declare module '@quarx-ui/core' {
    type CustomPaletteColor = CustomUnionType<'color1' | 'color2' | 'color3'>
}
```

2. Использовать запись `Record<Type, string>`:

```ts
import '@quarx-ui/core';

declare module '@quarx-ui/core' {
    type CustomPaletteColor = Record<'color1' | 'color2' | 'color3', string>
}
```

В примере ниже добавляются 3 собственных цвета, новое значение темы и несколько дополнительных свойств.
После чего данный объект помещается в ThemeProvider, внутри которого можно использовать добавленные свойства:

```ts
// quarx-ui.d.ts

import { CustomUnionType } from '@quarx-ui/core';

declare module '@quarx-ui/core' {
    type CustomPaletteColor = CustomUnionType<'color1' | 'color2' | 'color3'>
    type CustomPaletteType = CustomUnionType<'main'>
    interface CustomPalette {
        prop1: string,
        prop1: {
            subProp1: string,
            subProp2: number,
        }
    }
}

```

```jsx
// YourComponents.tsx

import { ThemeProvider } from '@emotion/react';
import { createTheme, Link, Button } from '@quarx-ui/core';

const theme = createTheme({
    palette: {
        type: 'main',
        colors: {
            color1: '#42e0c9',
            color2: '#e85454',
            color3: '#eeeeee',
        },
    },
    prop1: 'This is a custom prop1',
    prop2: {
        subProp1: 'This is a custom subProp1',
        subProp2: 1,
    }
});

const YourComponent = () => (
    <ThemeProvider theme={theme}>
        <div>
            <Link color="color1">
                Foo
            </Link>
            <Button color="color2">
                Bar
            </Button>
        </div>
    </ThemeProvider>
);
```

###Таблица типов/интерфейсов, которые возможно расширить:

| Имя                              |    Тип    | Соответствие               |
|----------------------------------|:---------:|:---------------------------|
| CustomPalette                    | interface | Palette                    |
| CustomPaletteBackgroundContainer |   union   | PaletteBackgroundContainer |
| CustomPaletteBackground          | interface | PaletteBackground          |
| CustomPaletteBorderFocus         |   union   | PaletteBorderFocus         |
| CustomPaletteBorder              | interface | PaletteBorder              |
| CustomPaletteDisabled            |   union   | PaletteDisabled            |
| CustomPaletteText                |   union   | PaletteText                |
| CustomPaletteColor               |   union   | PaletteColor               |
| CustomPaletteColorValues         | interface | PaletteColorValues         |
| CustomTheme                      | interface | Theme                      |
| CustomTypography                 | interface | Typography                 |
| CustomBaseTypographyType         |   union   | BaseTypographyType         |
