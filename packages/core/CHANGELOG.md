# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [2.0.2](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.0.2&targetBranch=@quarx-ui/core@2.0.0) (2023-05-22)


### Bug Fixes

* Исправлен импорт `jsx` из emotion ([eaa2c21](https://github.com/quarx-ui/quarx/commits/eaa2c2153af501ae987a0f31416158d11595eaeb))
* Исправлена типизация сборки ([f76cd5f](https://github.com/quarx-ui/quarx/commits/f76cd5f44e36b4dee4c550b3ad33efcec7237226))



### [2.0.1](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.0.1&targetBranch=@quarx-ui/core@2.0.0) (2023-05-19)


### Bug Fixes

* Исправлена типизация сборки ([f76cd5f](https://github.com/quarx-ui/quarx/commits/f76cd5f44e36b4dee4c550b3ad33efcec7237226))



## [2.0.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.0.0&targetBranch=@quarx-ui/core@1.2.2) (2023-05-16)


### ⚠ BREAKING CHANGES

* **palette:** Цвета фокуса `dark` и `light` в палитре заменены на `main` и `inverse`. Их значения теперь зависят от выбранной цветовой темы (light/dark)

### Features

* [#112](https://github.com/quarx-ui/quarx/issues/112) - Изменена логика свойства `cssVars` ([da20392](https://github.com/quarx-ui/quarx/commits/da20392f915a7d00e816777fab4dab9b11c386ce))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Инициализация css-переменных вынесена в root ([7a33c7b](https://github.com/quarx-ui/quarx/commits/7a33c7bb2eb640602e39c487050bcafe35a63851))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Обновлены снэпшоты (jest) ([8974679](https://github.com/quarx-ui/quarx/commits/89746791d4ea957a645a0ae61d37176e68985aa2))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Переименована функция getCssVarNames в `createCssVarNames` ([5610f38](https://github.com/quarx-ui/quarx/commits/5610f387f4fdcd1a4a269c95eb272a32ed749036))
* [#116](https://github.com/quarx-ui/quarx/issues/116) - Добавлены компоненты `SidePage` и `OverScreen` ([0a9859b](https://github.com/quarx-ui/quarx/commits/0a9859b4af8bd1e0ce38402f0d270ed9d57b3ed4))
* [#19](https://github.com/quarx-ui/quarx/issues/19) - Добавлен компонент **Link** ([cbd1ca4](https://github.com/quarx-ui/quarx/commits/cbd1ca4c026abc914eac838cc5e074c1a28dcbdd))
* [#20](https://github.com/quarx-ui/quarx/issues/20) - Добавлен компонент **TextField** ([2f32c89](https://github.com/quarx-ui/quarx/commits/2f32c89aa5759a75565ad2111fc2bab0a9a62040))
* [#34](https://github.com/quarx-ui/quarx/issues/34) - Добавлены токены borderRadius ([ae4e8c1](https://github.com/quarx-ui/quarx/commits/ae4e8c1b6a27df30ea4ba1ff6c7584bbce41f303))
* [#70](https://github.com/quarx-ui/quarx/issues/70) - Добавлен компонент `Modal` ([9d967b3](https://github.com/quarx-ui/quarx/commits/9d967b3fec3f073ad8f36d7f44d84704df45ad68))
* **Badge:** [#44](https://github.com/quarx-ui/quarx/issues/44) - Обновлены стили ([9364da8](https://github.com/quarx-ui/quarx/commits/9364da8f12632fd3d719b9ed2830b2b29f6682f3))
* **borderRadii:** Добавлено новое значение `max` с полным скруглением ([6b1a25c](https://github.com/quarx-ui/quarx/commits/6b1a25ca3faca62f95ea87905fcf6d699ae9715e))
* **Checkbox:** Обновлены стили и анимация ([df8736c](https://github.com/quarx-ui/quarx/commits/df8736c894de30cc8731b2b7e59b67650fb7ffca))
* **ClickableElements:** Убран синий/серый оттенок при нажатии по элементу на мобильных устройствах ([#180](https://github.com/quarx-ui/quarx/issues/180)) ([983a650](https://github.com/quarx-ui/quarx/commits/983a650c5cc777920956c592d8c1f51fa678024f)), closes [#177](https://github.com/quarx-ui/quarx/issues/177)
* **Counter:** [#45](https://github.com/quarx-ui/quarx/issues/45) - Обновлены стили ([868c764](https://github.com/quarx-ui/quarx/commits/868c764bcf92dc9d2517f13c6888f9739fdbcd93))
* **Divider:** Добавлен пропс `width` ([677847a](https://github.com/quarx-ui/quarx/commits/677847a53b8fcb93b450d16592181b754f07e525))
* **elevations:** Обновлены токены ([29cbb5e](https://github.com/quarx-ui/quarx/commits/29cbb5ee65f87eb4b760f27c26e99fa44bb1cbaa))
* **OverScreen:** Добавлена поддержка css-размерностей ([9fbf378](https://github.com/quarx-ui/quarx/commits/9fbf3785c825bc03cef5a3a0e90bc0ad2e3ffb27))
* **palette:** Цвета фокуса `dark` и `light` в палитре заменены на `main` и `inverse`. Их значения теперь зависят от выбранной цветовой темы (light/dark) ([b6a3249](https://github.com/quarx-ui/quarx/commits/b6a32496081fc3fcf59fc313a93908ae6e17ba41))
* **RadioButton:** Добавлены css-переменные, внесены доработки ([d5f6dd3](https://github.com/quarx-ui/quarx/commits/d5f6dd35eef962b9e6077b83dc0d20d221d5cd2b))
* **RadioButton:** Обновление стилей ([e7fb714](https://github.com/quarx-ui/quarx/commits/e7fb7147e1642afaab2ad09268f27219b481a846))
* **scripts:** Разработана CLI программа **new** ([d9d818d](https://github.com/quarx-ui/quarx/commits/d9d818df0805ed9e23189147041997d363196cf1))
* **SelectionGroup:** Добавлен компонент **SelectionGroup** ([#139](https://github.com/quarx-ui/quarx/issues/139)) ([a246465](https://github.com/quarx-ui/quarx/commits/a246465db9b81db7e476212cce0658f74416f820)), closes [#103](https://github.com/quarx-ui/quarx/issues/103)
* **Selections:** Добавлены **SelectionList**, **SelectionTree**, добавлены цвета focus-visible темной темы ([#147](https://github.com/quarx-ui/quarx/issues/147)) ([2b474d5](https://github.com/quarx-ui/quarx/commits/2b474d515f711e9ad0713e1a17a482c19905d928)), closes [#103](https://github.com/quarx-ui/quarx/issues/103)
* **Selection:** Добавлен компонент Selection ([#136](https://github.com/quarx-ui/quarx/issues/136)) ([668df7f](https://github.com/quarx-ui/quarx/commits/668df7fbc6c1eab5a3c0fbc3b6a18bed4c90afd9)), closes [#103](https://github.com/quarx-ui/quarx/issues/103)
* **Stack:** Добавлена возможность заменить корневой тег на кастомный ([c074b77](https://github.com/quarx-ui/quarx/commits/c074b774f798a91d512c476a7c7a0444cd65e3e2)), closes [#171](https://github.com/quarx-ui/quarx/issues/171)
* **Switcher:** Добавлены css-переменные, внесены доработки ([3df2aae](https://github.com/quarx-ui/quarx/commits/3df2aaec54bdb223ea053772738bd1b0a4a4000e))
* **Switcher:** Обновление стилей ([d3ac88a](https://github.com/quarx-ui/quarx/commits/d3ac88a7730d67ef15a62bd8a7023c587c2a9068))
* **theme:** Добавлена возможность назначать компонентам базовые стили ([6f30ae5](https://github.com/quarx-ui/quarx/commits/6f30ae55c0c6df5eae921f3e1de547537d1adc73))
* **theme:** Доработана обработка единиц измерения ([b05d8d5](https://github.com/quarx-ui/quarx/commits/b05d8d5727fee88e45c24356111033687e16f7db))
* **usePropsOverwrites:** Автоматическое создание имени для стилей ([ac1526e](https://github.com/quarx-ui/quarx/commits/ac1526e924526cd7ddc1f9715ed931bd3c236c76))
* Возможность расширения дефолтных интерфейсов ([281897c](https://github.com/quarx-ui/quarx/commits/281897ceb73d2b4b133fe8a6326ad9951fc5ae34))
* Добавлен компонент **Accordion** ([a3b10b2](https://github.com/quarx-ui/quarx/commits/a3b10b27cb0de4da1837d30a4b9d853d50edf2db))
* Добавлен компонент **DelayedMounter** ([2f54889](https://github.com/quarx-ui/quarx/commits/2f548893b31319d8feb5d9f7494f0c11c4ce9a50))
* Добавлен компонент **Divider** ([0bd3cb7](https://github.com/quarx-ui/quarx/commits/0bd3cb74ec415f38e178937bcc18bae2ed021b73), [1e8c5ff](https://github.com/quarx-ui/quarx/commits/1e8c5ffe78b1671827bda9ef0d065b1a141942f0)), closes [#173](https://github.com/quarx-ui/quarx/issues/173)
* Добавлен компонент **Popup** ([#166](https://github.com/quarx-ui/quarx/issues/166)) ([248ad45](https://github.com/quarx-ui/quarx/commits/248ad4557715a227f6b6bc199c5b8b9f59729860)), closes [#38](https://github.com/quarx-ui/quarx/issues/38)
* Добавлен компонент **Tabs** ([a0c5523](https://github.com/quarx-ui/quarx/commits/a0c5523765d078ea21d64f375d777b897f1eae73))
* Добавлен компонент Chips ([9399c23](https://github.com/quarx-ui/quarx/commits/9399c2325703b356fcb1f3b3816591a9b66756b2)), closes [#22](https://github.com/quarx-ui/quarx/issues/22)
* Добавлен компонент ClickAwayListener ([2c6771b](https://github.com/quarx-ui/quarx/commits/2c6771b7bfcbb3da376fbdde60bbc7066caf984d)), closes [#38](https://github.com/quarx-ui/quarx/issues/38)
* Добавлен системный компонент **Stack** ([ac7ec17](https://github.com/quarx-ui/quarx/commits/ac7ec17eec750ff51b1ca86e88816dcc23eb5448)), closes [#163](https://github.com/quarx-ui/quarx/issues/163)
* Добавлен хук **useFloating** ([b82dd57](https://github.com/quarx-ui/quarx/commits/b82dd5740105d913546499a20065d7001a442aab))
* Добавлен хук **useTimer** ([28465a0](https://github.com/quarx-ui/quarx/commits/28465a03554dda5c43a7a0b55d3255018e8ec081))
* Добавлена возможность стилизации компонентов с помощью css-переменных ([4dc7f15](https://github.com/quarx-ui/quarx/commits/4dc7f15143b1580acaa686aef1e37ee4d203d7ee))
* Добавлены компоненты **If**, **Switch** ([6bd7dd0](https://github.com/quarx-ui/quarx/commits/6bd7dd09ca85d91b900f1d9b19157ba3e3598718)), closes [#106](https://github.com/quarx-ui/quarx/issues/106)
* Перегруппированы компоненты Storybook`а ([#125](https://github.com/quarx-ui/quarx/issues/125)) ([c870863](https://github.com/quarx-ui/quarx/commits/c8708638d3d8385fafa833138ffeb1cc71af6b5f))


### Bug Fixes

* **Button:** Исправлено отображение цветов, добавлены css-переменные ([e6f50e6](https://github.com/quarx-ui/quarx/commits/e6f50e6e38fdb11a379ec8d42c06fbdd1612dd99))
* **Button:** Исправлены вертикальные отступы для размера `small` ([51b63c3](https://github.com/quarx-ui/quarx/commits/51b63c3e249333e2db3f08f33c5446fa0621f734))
* **elevations:** Удалено дублирование объектов с размерами ([c773aac](https://github.com/quarx-ui/quarx/commits/c773aac0dada31b5bc7455802c5a1f62e2302263))
* **if/switch:** Убраны из storybook компоненты условной отрисовки ([#153](https://github.com/quarx-ui/quarx/issues/153)) ([e088c80](https://github.com/quarx-ui/quarx/commits/e088c8039848dfe6775ec4ecbbb9dd42d06a3da8))
* **if/switch:** Убраны из общего доступа компоненты условной отрисовки ([#151](https://github.com/quarx-ui/quarx/issues/151)) ([d3a3fa3](https://github.com/quarx-ui/quarx/commits/d3a3fa3db9a9974b066167b77bd3e57eb7bf59f5))
* Introduction story. Установка ([#213](https://github.com/quarx-ui/quarx/issues/213)) ([ea5a1f6](https://github.com/quarx-ui/quarx/commits/ea5a1f60679550aa9d7f1c326cc3a3c5119f493a))
* **jsDoc:** Исправление jsDoc ([520c7cc](https://github.com/quarx-ui/quarx/commits/520c7cc45c6a5eadea904c949cd47dca86fbba62))
* **makeStyles:** Исправлена типизация makeStyles, удалены лишние проверки на подфункции ([c564847](https://github.com/quarx-ui/quarx/commits/c564847063288f8ec5cef0e99dc74c462a6f632b))
* **makeStyles:** Исправлена типизация передаваемого объекта со стилями ([400a9fb](https://github.com/quarx-ui/quarx/commits/400a9fb3b81e4c8cdbf4a3128d7cadd6429ff65d))
* **new_script:** Исправлен баг с SingleLine импортом Props в ComponentsProps. ([9cbbf28](https://github.com/quarx-ui/quarx/commits/9cbbf28be496b484f93c9ef2ab598390a4e1d1fd))
* **OverScreen:** Исправлена анимация ([8e07059](https://github.com/quarx-ui/quarx/commits/8e070598fc793efca26863ed0d522dab7d3b7379))
* **Tabs:** Исправлено отображение fade в крайних положениях ([576f59a](https://github.com/quarx-ui/quarx/commits/576f59aeea416c14a878d5cadbedece309805f9f))
* **Tabs:** Мелкие исправления ([aa6b7ee](https://github.com/quarx-ui/quarx/commits/aa6b7ee9213a7b34e336fd4c14902f2cb2eb3c2c))
* **Tabs:** Мелкие исправления и доработки ([9e36104](https://github.com/quarx-ui/quarx/commits/9e361048662c586def27e4fb028b3139db3e2560))
* **Tabs:** Погрешность при округлении ширины элементов в Chrome ([ead1cb2](https://github.com/quarx-ui/quarx/commits/ead1cb20e83cce429fdfd3f27276e5aeb2e4853d))
* **TextField:** Внесены исправления и доработки ([fb659ee](https://github.com/quarx-ui/quarx/commits/fb659ee08894c49a03cfa5ed9aa8068917d10d13))
* **theme:** Исправлена генерация токенов `alpha` для темной темы ([e088102](https://github.com/quarx-ui/quarx/commits/e088102ef53e2476f3c1a782c70c96e836855e42))
* Модальное окно. Замена свойства body на children ([#218](https://github.com/quarx-ui/quarx/issues/218)) ([a369f63](https://github.com/quarx-ui/quarx/commits/a369f6352a3eb4bc3cfdcb00d5b8378d4ac97786))
* Расширен список версий React в peer-зависимостях ([d895933](https://github.com/quarx-ui/quarx/commits/d895933699016e65f4f84ed482c67d7da37e8ca6))


### Styles

* **Button:** Обновлены стили скруглений ([4733a88](https://github.com/quarx-ui/quarx/commits/4733a888aaea3ebeb232796a049712508e44aa0f))


### Code Refactoring

* **all:** Переход к Qx вместо Sx. Разделение на (un)styled ([97cdcc5](https://github.com/quarx-ui/quarx/commits/97cdcc548b130d9873ec05e773560b4360d58d01))
* **Loader:** Размер `base` заменен на `medium` ([38417c0](https://github.com/quarx-ui/quarx/commits/38417c00f732b9bcf1c440bc473485dcec92f20a))
* **makeStyles:** Изменен способ передачи параметров в **useStyles** ([1a37e73](https://github.com/quarx-ui/quarx/commits/1a37e735b881fbfa8a00d2b27a67097aa5fb27d1))
* **utils:** Утилиты для работы с константными перечислениями перенесены в enums ([3809182](https://github.com/quarx-ui/quarx/commits/38091823c18b422218507def766134e1b34571e3))
* Исправлена внутренняя типизация компонентов ([80eac6d](https://github.com/quarx-ui/quarx/commits/80eac6dc88dc6f1f7430c10968423972c3d8de82))
* Исправлены описания jsdoc, вынесено создание HTML-атрибутов в общий тип ([b56b1df](https://github.com/quarx-ui/quarx/commits/b56b1dfe61496e53199a357e4fd1f31a515512a3))
* Увеличено быстродействие проверки типов константных объектов ([1efbea3](https://github.com/quarx-ui/quarx/commits/1efbea3714560acc7ff3b13f1840e1d1d849ad41))
* Удалены лишние зависимости и неиспользуемый код ([bb4aeb7](https://github.com/quarx-ui/quarx/commits/bb4aeb7de77acd1aba286cbfbda1525de310a1be))



## [1.5.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@1.5.0&targetBranch=@quarx-ui/core@1.2.2) (2022-12-15)


### Features

* [#112](https://github.com/quarx-ui/quarx/issues/112) - Изменена логика свойства `cssVars` ([da20392](https://github.com/quarx-ui/quarx/commits/da20392f915a7d00e816777fab4dab9b11c386ce))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Инициализация css-переменных вынесена в root ([7a33c7b](https://github.com/quarx-ui/quarx/commits/7a33c7bb2eb640602e39c487050bcafe35a63851))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Обновлены снэпшоты (jest) ([8974679](https://github.com/quarx-ui/quarx/commits/89746791d4ea957a645a0ae61d37176e68985aa2))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Переименована функция getCssVarNames в `createCssVarNames` ([5610f38](https://github.com/quarx-ui/quarx/commits/5610f387f4fdcd1a4a269c95eb272a32ed749036))
* [#116](https://github.com/quarx-ui/quarx/issues/116) - Добавлен компонент `SidePage` и `OverScreen` ([0a9859b](https://github.com/quarx-ui/quarx/commits/0a9859b4af8bd1e0ce38402f0d270ed9d57b3ed4))
* [#19](https://github.com/quarx-ui/quarx/issues/19) - Добавлен компонент **Link** ([cbd1ca4](https://github.com/quarx-ui/quarx/commits/cbd1ca4c026abc914eac838cc5e074c1a28dcbdd))
* [#20](https://github.com/quarx-ui/quarx/issues/20) - Добавлен компонент **TextField** ([2f32c89](https://github.com/quarx-ui/quarx/commits/2f32c89aa5759a75565ad2111fc2bab0a9a62040))
* [#34](https://github.com/quarx-ui/quarx/issues/34) - Добавлены токены borderRadius ([ae4e8c1](https://github.com/quarx-ui/quarx/commits/ae4e8c1b6a27df30ea4ba1ff6c7584bbce41f303))
* [#70](https://github.com/quarx-ui/quarx/issues/70) - Добавлен компонент `Modal` ([9d967b3](https://github.com/quarx-ui/quarx/commits/9d967b3fec3f073ad8f36d7f44d84704df45ad68))
* **Badge:** [#44](https://github.com/quarx-ui/quarx/issues/44) - Обновлены стили ([9364da8](https://github.com/quarx-ui/quarx/commits/9364da8f12632fd3d719b9ed2830b2b29f6682f3))
* **borderRadii:** Добавлено новое значение `max` с полным скруглением ([6b1a25c](https://github.com/quarx-ui/quarx/commits/6b1a25ca3faca62f95ea87905fcf6d699ae9715e))
* **Checkbox:** Обновлены стили и анимация ([df8736c](https://github.com/quarx-ui/quarx/commits/df8736c894de30cc8731b2b7e59b67650fb7ffca))
* **Counter:** [#45](https://github.com/quarx-ui/quarx/issues/45) - Обновлены стили ([868c764](https://github.com/quarx-ui/quarx/commits/868c764bcf92dc9d2517f13c6888f9739fdbcd93))
* **RadioButton:** Добавлены css-переменные, внесены доработки ([d5f6dd3](https://github.com/quarx-ui/quarx/commits/d5f6dd35eef962b9e6077b83dc0d20d221d5cd2b))
* **RadioButton:** Обновление стилей ([e7fb714](https://github.com/quarx-ui/quarx/commits/e7fb7147e1642afaab2ad09268f27219b481a846))
* **scripts:** Разработана CLI программа new ([d9d818d](https://github.com/quarx-ui/quarx/commits/d9d818df0805ed9e23189147041997d363196cf1))
* **SelectionGroup:** Добавлен компонент SelectionGroup ([#139](https://github.com/quarx-ui/quarx/issues/139)) ([a246465](https://github.com/quarx-ui/quarx/commits/a246465db9b81db7e476212cce0658f74416f820)), closes [#103](https://github.com/quarx-ui/quarx/issues/103)
* **Selection:** Добавлен компонент Selection ([#136](https://github.com/quarx-ui/quarx/issues/136)) ([668df7f](https://github.com/quarx-ui/quarx/commits/668df7fbc6c1eab5a3c0fbc3b6a18bed4c90afd9)), closes [#103](https://github.com/quarx-ui/quarx/issues/103)
* **Switcher:** Добавлены css-переменные, внесены доработки ([3df2aae](https://github.com/quarx-ui/quarx/commits/3df2aaec54bdb223ea053772738bd1b0a4a4000e))
* **Switcher:** Обновление стилей ([d3ac88a](https://github.com/quarx-ui/quarx/commits/d3ac88a7730d67ef15a62bd8a7023c587c2a9068))
* **theme:** Доработана обработка единиц измерения ([b05d8d5](https://github.com/quarx-ui/quarx/commits/b05d8d5727fee88e45c24356111033687e16f7db))
* Добавлен компонент **DelayedMounter** ([2f54889](https://github.com/quarx-ui/quarx/commits/2f548893b31319d8feb5d9f7494f0c11c4ce9a50))
* Добавлен компонент **Tabs** ([a0c5523](https://github.com/quarx-ui/quarx/commits/a0c5523765d078ea21d64f375d777b897f1eae73))
* Добавлен компонент Chips ([9399c23](https://github.com/quarx-ui/quarx/commits/9399c2325703b356fcb1f3b3816591a9b66756b2)), closes [#22](https://github.com/quarx-ui/quarx/issues/22)
* Добавлен компонент ClickAwayListener ([2c6771b](https://github.com/quarx-ui/quarx/commits/2c6771b7bfcbb3da376fbdde60bbc7066caf984d)), closes [#38](https://github.com/quarx-ui/quarx/issues/38)
* Добавлен хук **useFloating** ([b82dd57](https://github.com/quarx-ui/quarx/commits/b82dd5740105d913546499a20065d7001a442aab))
* Добавлен хук **useTimer** ([28465a0](https://github.com/quarx-ui/quarx/commits/28465a03554dda5c43a7a0b55d3255018e8ec081))
* Добавлена возможность стилизации компонентов с помощью css-переменных ([4dc7f15](https://github.com/quarx-ui/quarx/commits/4dc7f15143b1580acaa686aef1e37ee4d203d7ee))
* Добавлены компоненты If, Switch ([6bd7dd0](https://github.com/quarx-ui/quarx/commits/6bd7dd09ca85d91b900f1d9b19157ba3e3598718)), closes [#106](https://github.com/quarx-ui/quarx/issues/106)
* Перегруппированы компоненты Storybook`а ([#125](https://github.com/quarx-ui/quarx/issues/125)) ([c870863](https://github.com/quarx-ui/quarx/commits/c8708638d3d8385fafa833138ffeb1cc71af6b5f))


### Bug Fixes

* **Button:** Исправлено отображение цветов, добавлены css-переменные ([e6f50e6](https://github.com/quarx-ui/quarx/commits/e6f50e6e38fdb11a379ec8d42c06fbdd1612dd99))
* **elevations:** Удалено дублирование объектов с размерами ([c773aac](https://github.com/quarx-ui/quarx/commits/c773aac0dada31b5bc7455802c5a1f62e2302263))
* **jsDoc:** Исправление jsDoc ([520c7cc](https://github.com/quarx-ui/quarx/commits/520c7cc45c6a5eadea904c949cd47dca86fbba62))
* **makeStyles:** Исправлена типизация makeStyles, удалены лишние проверки на подфункции ([c564847](https://github.com/quarx-ui/quarx/commits/c564847063288f8ec5cef0e99dc74c462a6f632b))
* **makeStyles:** Исправлена типизация передаваемого объекта со стилями ([400a9fb](https://github.com/quarx-ui/quarx/commits/400a9fb3b81e4c8cdbf4a3128d7cadd6429ff65d))
* **new_script:** Исправлен баг с SingleLine импортом Props в ComponentsProps. ([9cbbf28](https://github.com/quarx-ui/quarx/commits/9cbbf28be496b484f93c9ef2ab598390a4e1d1fd))
* **OverScreen:** Исправлена анимация ([8e07059](https://github.com/quarx-ui/quarx/commits/8e070598fc793efca26863ed0d522dab7d3b7379))
* **Tabs:** Мелкие исправления и доработки ([9e36104](https://github.com/quarx-ui/quarx/commits/9e361048662c586def27e4fb028b3139db3e2560))
* **Tabs:** Погрешность при округлении ширины элементов в Chrome ([ead1cb2](https://github.com/quarx-ui/quarx/commits/ead1cb20e83cce429fdfd3f27276e5aeb2e4853d))
* **TextField:** Внесены исправления и доработки ([fb659ee](https://github.com/quarx-ui/quarx/commits/fb659ee08894c49a03cfa5ed9aa8068917d10d13))
* **theme:** Исправлена генерация токенов `alpha` для темной темы ([e088102](https://github.com/quarx-ui/quarx/commits/e088102ef53e2476f3c1a782c70c96e836855e42))


### Styles

* **Button:** Обновлены стили скруглений ([4733a88](https://github.com/quarx-ui/quarx/commits/4733a888aaea3ebeb232796a049712508e44aa0f))


### Code Refactoring

* **all:** Переход к Qx вместо Sx. Разделение на (un)styled ([97cdcc5](https://github.com/quarx-ui/quarx/commits/97cdcc548b130d9873ec05e773560b4360d58d01))
* Исправлена внутренняя типизация компонентов ([80eac6d](https://github.com/quarx-ui/quarx/commits/80eac6dc88dc6f1f7430c10968423972c3d8de82))
* Исправлены описания jsdoc, вынесено создание HTML-атрибутов в общий тип ([b56b1df](https://github.com/quarx-ui/quarx/commits/b56b1dfe61496e53199a357e4fd1f31a515512a3))
* Удалены лишние зависимости и неиспользуемый код ([bb4aeb7](https://github.com/quarx-ui/quarx/commits/bb4aeb7de77acd1aba286cbfbda1525de310a1be))



## [1.4.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@1.4.0&targetBranch=@quarx-ui/core@1.2.2) (2022-11-23)


### Features

* [#112](https://github.com/quarx-ui/quarx/issues/112) - Изменена логика свойства `cssVars` ([da20392](https://github.com/quarx-ui/quarx/commits/da20392f915a7d00e816777fab4dab9b11c386ce))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Инициализация css-переменных вынесена в root ([7a33c7b](https://github.com/quarx-ui/quarx/commits/7a33c7bb2eb640602e39c487050bcafe35a63851))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Обновлены снэпшоты (jest) ([8974679](https://github.com/quarx-ui/quarx/commits/89746791d4ea957a645a0ae61d37176e68985aa2))
* [#112](https://github.com/quarx-ui/quarx/issues/112) - Переименована функция getCssVarNames в `createCssVarNames` ([5610f38](https://github.com/quarx-ui/quarx/commits/5610f387f4fdcd1a4a269c95eb272a32ed749036))
* [#116](https://github.com/quarx-ui/quarx/issues/116) - Добавлен компонент `SidePage` и `OverScreen` ([0a9859b](https://github.com/quarx-ui/quarx/commits/0a9859b4af8bd1e0ce38402f0d270ed9d57b3ed4))
* [#19](https://github.com/quarx-ui/quarx/issues/19) - Добавлен компонент **Link** ([cbd1ca4](https://github.com/quarx-ui/quarx/commits/cbd1ca4c026abc914eac838cc5e074c1a28dcbdd))
* [#20](https://github.com/quarx-ui/quarx/issues/20) - Добавлен компонент **TextField** ([2f32c89](https://github.com/quarx-ui/quarx/commits/2f32c89aa5759a75565ad2111fc2bab0a9a62040))
* [#34](https://github.com/quarx-ui/quarx/issues/34) - Добавлены токены borderRadius ([ae4e8c1](https://github.com/quarx-ui/quarx/commits/ae4e8c1b6a27df30ea4ba1ff6c7584bbce41f303))
* [#70](https://github.com/quarx-ui/quarx/issues/70) - Добавлен компонент `Modal` ([9d967b3](https://github.com/quarx-ui/quarx/commits/9d967b3fec3f073ad8f36d7f44d84704df45ad68))
* **Badge:** [#44](https://github.com/quarx-ui/quarx/issues/44) - Обновлены стили ([9364da8](https://github.com/quarx-ui/quarx/commits/9364da8f12632fd3d719b9ed2830b2b29f6682f3))
* **borderRadii:** Добавлено новое значение `max` с полным скруглением ([6b1a25c](https://github.com/quarx-ui/quarx/commits/6b1a25ca3faca62f95ea87905fcf6d699ae9715e))
* **Checkbox:** Обновлены стили и анимация ([df8736c](https://github.com/quarx-ui/quarx/commits/df8736c894de30cc8731b2b7e59b67650fb7ffca))
* **Counter:** [#45](https://github.com/quarx-ui/quarx/issues/45) - Обновлены стили ([868c764](https://github.com/quarx-ui/quarx/commits/868c764bcf92dc9d2517f13c6888f9739fdbcd93))
* **RadioButton:** Добавлены css-переменные, внесены доработки ([d5f6dd3](https://github.com/quarx-ui/quarx/commits/d5f6dd35eef962b9e6077b83dc0d20d221d5cd2b))
* **RadioButton:** Обновление стилей ([e7fb714](https://github.com/quarx-ui/quarx/commits/e7fb7147e1642afaab2ad09268f27219b481a846))
* **scripts:** Разработана CLI программа new ([d9d818d](https://github.com/quarx-ui/quarx/commits/d9d818df0805ed9e23189147041997d363196cf1))
* **Switcher:** Добавлены css-переменные, внесены доработки ([3df2aae](https://github.com/quarx-ui/quarx/commits/3df2aaec54bdb223ea053772738bd1b0a4a4000e))
* **Switcher:** Обновление стилей ([d3ac88a](https://github.com/quarx-ui/quarx/commits/d3ac88a7730d67ef15a62bd8a7023c587c2a9068))
* **theme:** Доработана обработка единиц измерения ([b05d8d5](https://github.com/quarx-ui/quarx/commits/b05d8d5727fee88e45c24356111033687e16f7db))
* Добавлен компонент **Tabs** ([a0c5523](https://github.com/quarx-ui/quarx/commits/a0c5523765d078ea21d64f375d777b897f1eae73))
* Добавлен компонент Chips ([9399c23](https://github.com/quarx-ui/quarx/commits/9399c2325703b356fcb1f3b3816591a9b66756b2)), closes [#22](https://github.com/quarx-ui/quarx/issues/22)
* Добавлен компонент ClickAwayListener ([2c6771b](https://github.com/quarx-ui/quarx/commits/2c6771b7bfcbb3da376fbdde60bbc7066caf984d)), closes [#38](https://github.com/quarx-ui/quarx/issues/38)
* Добавлен хук **useFloating** ([b82dd57](https://github.com/quarx-ui/quarx/commits/b82dd5740105d913546499a20065d7001a442aab))
* Добавлена возможность стилизации компонентов с помощью css-переменных ([4dc7f15](https://github.com/quarx-ui/quarx/commits/4dc7f15143b1580acaa686aef1e37ee4d203d7ee))
* Добавлены компоненты If, Switch ([6bd7dd0](https://github.com/quarx-ui/quarx/commits/6bd7dd09ca85d91b900f1d9b19157ba3e3598718)), closes [#106](https://github.com/quarx-ui/quarx/issues/106)


### Bug Fixes

* **Button:** Исправлено отображение цветов, добавлены css-переменные ([e6f50e6](https://github.com/quarx-ui/quarx/commits/e6f50e6e38fdb11a379ec8d42c06fbdd1612dd99))
* **elevations:** Удалено дублирование объектов с размерами ([c773aac](https://github.com/quarx-ui/quarx/commits/c773aac0dada31b5bc7455802c5a1f62e2302263))
* **makeStyles:** Исправлена типизация makeStyles, удалены лишние проверки на подфункции ([c564847](https://github.com/quarx-ui/quarx/commits/c564847063288f8ec5cef0e99dc74c462a6f632b))
* **new_script:** Исправлен баг с SingleLine импортом Props в ComponentsProps. ([9cbbf28](https://github.com/quarx-ui/quarx/commits/9cbbf28be496b484f93c9ef2ab598390a4e1d1fd))
* **Tabs:** Погрешность при округлении ширины элементов в Chrome ([ead1cb2](https://github.com/quarx-ui/quarx/commits/ead1cb20e83cce429fdfd3f27276e5aeb2e4853d))
* **TextField:** Внесены исправления и доработки ([fb659ee](https://github.com/quarx-ui/quarx/commits/fb659ee08894c49a03cfa5ed9aa8068917d10d13))
* **theme:** Исправлена генерация токенов `alpha` для темной темы ([e088102](https://github.com/quarx-ui/quarx/commits/e088102ef53e2476f3c1a782c70c96e836855e42))


### Styles

* **Button:** Обновлены стили скруглений ([4733a88](https://github.com/quarx-ui/quarx/commits/4733a888aaea3ebeb232796a049712508e44aa0f))


### Code Refactoring

* **all:** Переход к Qx вместо Sx. Разделение на (un)styled ([97cdcc5](https://github.com/quarx-ui/quarx/commits/97cdcc548b130d9873ec05e773560b4360d58d01))
* Исправлена внутренняя типизация компонентов ([80eac6d](https://github.com/quarx-ui/quarx/commits/80eac6dc88dc6f1f7430c10968423972c3d8de82))
* Исправлены описания jsdoc, вынесено создание HTML-атрибутов в общий тип ([b56b1df](https://github.com/quarx-ui/quarx/commits/b56b1dfe61496e53199a357e4fd1f31a515512a3))
* Удалены лишние зависимости и неиспользуемый код ([bb4aeb7](https://github.com/quarx-ui/quarx/commits/bb4aeb7de77acd1aba286cbfbda1525de310a1be))



## [1.3.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@1.3.0&targetBranch=@quarx-ui/core@1.2.2) (2022-08-17)


### Features

* [#19](https://github.com/quarx-ui/quarx/issues/19) - Добавлен компонент **Link** ([cbd1ca4](https://github.com/quarx-ui/quarx/commits/cbd1ca4c026abc914eac838cc5e074c1a28dcbdd))
* [#20](https://github.com/quarx-ui/quarx/issues/20) - Добавлен компонент **TextField** ([2f32c89](https://github.com/quarx-ui/quarx/commits/2f32c89aa5759a75565ad2111fc2bab0a9a62040))
* [#34](https://github.com/quarx-ui/quarx/issues/34) - Добавлены токены borderRadius ([ae4e8c1](https://github.com/quarx-ui/quarx/commits/ae4e8c1b6a27df30ea4ba1ff6c7584bbce41f303))
* **Checkbox:** Обновлены стили и анимация ([df8736c](https://github.com/quarx-ui/quarx/commits/df8736c894de30cc8731b2b7e59b67650fb7ffca))
* **RadioButton:** Обновление стилей ([e7fb714](https://github.com/quarx-ui/quarx/commits/e7fb7147e1642afaab2ad09268f27219b481a846))
* **Switcher:** Обновление стилей ([d3ac88a](https://github.com/quarx-ui/quarx/commits/d3ac88a7730d67ef15a62bd8a7023c587c2a9068))


### Bug Fixes

* **elevations:** Удалено дублирование объектов с размерами ([c773aac](https://github.com/quarx-ui/quarx/commits/c773aac0dada31b5bc7455802c5a1f62e2302263))
* **makeStyles:** Исправлена типизация makeStyles, удалены лишние проверки на подфункции ([c564847](https://github.com/quarx-ui/quarx/commits/c564847063288f8ec5cef0e99dc74c462a6f632b))
* **TextField:** Внесены исправления и доработки ([fb659ee](https://github.com/quarx-ui/quarx/commits/fb659ee08894c49a03cfa5ed9aa8068917d10d13))


### Styles

* **Button:** Обновлены стили скруглений ([4733a88](https://github.com/quarx-ui/quarx/commits/4733a888aaea3ebeb232796a049712508e44aa0f))


### Code Refactoring

* Исправлена внутренняя типизация компонентов ([80eac6d](https://github.com/quarx-ui/quarx/commits/80eac6dc88dc6f1f7430c10968423972c3d8de82))
* Исправлены описания jsdoc, вынесено создание HTML-атрибутов в общий тип ([b56b1df](https://github.com/quarx-ui/quarx/commits/b56b1dfe61496e53199a357e4fd1f31a515512a3))
* Удалены лишние зависимости и неиспользуемый код ([6867af2](https://github.com/quarx-ui/quarx/commits/6867af29d0459edf375a0b03952c4bf5f5779fd9))



### 1.2.2 (2022-07-08)

**Note:** Version bump only for package @quarx-ui/core
