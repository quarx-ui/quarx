# Code Conventions

## Naming

#### camelCase
Локальные переменные, функции, свойства, методы

Примеры:
```ts
const fooBar = 'baz';

const findSomething = () => { /* ... */ };

class Foo {
    awesomeProperty = 'hello';
    
    awesomeMethod = () => 'world';
}
```

<br/>

#### PascalCase
Классы, перечисления, компоненты, типы, интерфейсы

Примеры:
```tsx
export class TimeFormatter { /* ... */ };

export enum Sides {
    top = 'top',
    left = 'left',
    right = 'right',
    bottom = 'bottom',
}

export const NavBar = () => (
    <div>{/* ... */}</div>
);

export type Side =
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'

export interface NavBarProps {
    children?: ReactChild,
    className?: string,
}
```

<br/>

#### UPPER_CASE
Константы или константные объекты глобального назначения

Примеры:
```ts
export const FOO = 'bar';

export const COLORS = {
    main: 'main',
    secondary: 'secondary',
};
```

