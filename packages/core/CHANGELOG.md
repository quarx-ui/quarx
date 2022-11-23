# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
