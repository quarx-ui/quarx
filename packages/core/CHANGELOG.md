# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [2.8.4](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.8.4&targetBranch=@quarx-ui/core@2.8.3) (2024-07-12)

**Note:** Version bump only for package @quarx-ui/core





### [2.8.3](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.8.3&targetBranch=@quarx-ui/core@2.8.2) (2024-07-03)

**Note:** Version bump only for package @quarx-ui/core





### [2.8.2](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.8.2&targetBranch=@quarx-ui/core@2.8.1) (2024-05-23)


### Bug Fixes

* **makeStyles:** Исправлена проверка на массив при слиянии стилей ([7b46a77](https://github.com/quarx-ui/quarx/commits/7b46a77425c482362934ced39d66e34053b0b630))
* **OverScreen:** Отключены ложные срабатывания закрытия при перетягивании мыши за пределы children ([73b3f58](https://github.com/quarx-ui/quarx/commits/73b3f584596477228536b7342a5e2557abc50230))
* **ThemeProvider:** Исправлено пробрасывание темы для случаев, когда она не определена изначально ([ea25eab](https://github.com/quarx-ui/quarx/commits/ea25eabd00200db83cf1397d1d0fa79137c011a5))


### Code Refactoring

* Из билда убраны лишние файлы, отключена сборка commonjs ([b0b80ba](https://github.com/quarx-ui/quarx/commits/b0b80ba987ab9311732b363072ed9a8ff8790c62))
* Изменена структура директорий ([a87662e](https://github.com/quarx-ui/quarx/commits/a87662ee3ac172d7c3424e285b0dd6774fbf45a3))



### [2.8.1](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.8.1&targetBranch=@quarx-ui/core@2.8.0) (2023-11-27)

**Note:** Version bump only for package @quarx-ui/core





## [2.8.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.8.0&targetBranch=@quarx-ui/core@2.7.2) (2023-11-03)


### Features

* **TextField:** Добавлена возможность изменения иконки рядом с ошибкой ([#294](https://github.com/quarx-ui/quarx/issues/294)) ([f7748bd](https://github.com/quarx-ui/quarx/commits/f7748bd8bcfaa6b6d523d7963fe54331ffd2875d))
* Добавлен компонент **Breadcrumbs** ([#194](https://github.com/quarx-ui/quarx/issues/194)) ([66dcfd9](https://github.com/quarx-ui/quarx/commits/66dcfd918f7256819f42df4060cf1b178a619456)), closes [#117](https://github.com/quarx-ui/quarx/issues/117)


### Bug Fixes

* **Collapse:** исправлен баг с расчетом размера дочернего компонента ([6d2c27d](https://github.com/quarx-ui/quarx/commits/6d2c27d6aac404a56b693b206df54f03a9609357))
* **Tabs:** исправлено некорректное отображение counter при передаче туда 0 ([beb39e2](https://github.com/quarx-ui/quarx/commits/beb39e28310c91dd4b4ab2b74a702c4a7c0ef159))



### [2.7.2](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.7.2&targetBranch=@quarx-ui/core@2.7.1) (2023-10-02)


### Bug Fixes

* **Alert:** Исправлено переполнение текстом ([e336dd9](https://github.com/quarx-ui/quarx/commits/e336dd9c6f36fa389821fa7c4363de4ffb3ab983))


### Code Refactoring

* В компонентах теперь используется типографика из темы ([8e22865](https://github.com/quarx-ui/quarx/commits/8e2286507610b067f13644cb722e6da4a555102a))



### [2.7.1](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.7.1&targetBranch=@quarx-ui/core@2.7.0) (2023-09-25)


### Bug Fixes

* **Collapse:** Фикс использования устаревшего значения высоты ([0d08e31](https://github.com/quarx-ui/quarx/commits/0d08e31748f896163bc7a91bf36a300b38513d52))
* **DelayedMounter:** Фикс использования устаревшего значения ([0601d00](https://github.com/quarx-ui/quarx/commits/0601d0088b04380c1492ef98b464c34f9645bb29))
* **DropdownItem:** Фикс передачи текста в кнопках ([55432d2](https://github.com/quarx-ui/quarx/commits/55432d25e0dc94999b4fd6759c927636e644f278))
* **usePropsOverwrites:** Из типизации возвращаемых props исключено свойство classes ([9205fa9](https://github.com/quarx-ui/quarx/commits/9205fa9ff0dad6f9e1ac190e42b9bc710dcab0ea))



## [2.7.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.7.0&targetBranch=@quarx-ui/core@2.6.0) (2023-09-08)


### Features

* **Chips:** Изменен способ задания расстояния между элементами ([3bea4f6](https://github.com/quarx-ui/quarx/commits/3bea4f69ba1d1e7cc8957b531b55541cb0ceb4c5))
* **typography:** Возможность расширения дефолтных интерфейсов Typography ([b1725bd](https://github.com/quarx-ui/quarx/commits/b1725bd09267765e9a482c646832077f5a7b0bd9))
* **useStyles:** Возвращаемый объект стилей помещен в `useMemo` ([1f3a445](https://github.com/quarx-ui/quarx/commits/1f3a445e4d1303ef2941d5668041693203547f54))


### Bug Fixes

* **flattenDeep:** Исправлен возврат пустого массива ([b48dc0d](https://github.com/quarx-ui/quarx/commits/b48dc0d153121c90d0566ff7e0353dbdefb0fd92))
* **TextField:** Интерфейсы с исключением вынесены в отдельные типы ([e0e2220](https://github.com/quarx-ui/quarx/commits/e0e2220cc8ea660f14d73510e193e15717c0c2fd))


### Code Refactoring

* Исправлены циклические зависимости ([dc9d0dd](https://github.com/quarx-ui/quarx/commits/dc9d0dd4887eed131bbf209596a0b745eb30bbec))



## [2.6.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.6.0&targetBranch=@quarx-ui/core@2.5.0) (2023-08-17)


### Features

* **breakpoints:** Добавлено значение XL для 1440 ([19973a4](https://github.com/quarx-ui/quarx/commits/19973a46047c4de24245842c2b99b72bf45971cc))
* **Chips:** Добавлена возможность отключить иконку состояния ([f2e651f](https://github.com/quarx-ui/quarx/commits/f2e651fc2681ef8dc41efa43caf84c1415b727be))
* **useTheme:** Добавлена возможность изолировать тему библиотеки в провайдере от сторонних пакетов на основе emotion ([f96f048](https://github.com/quarx-ui/quarx/commits/f96f048b2724df79b3f4bcb7f3459cec3ee04d35))
* Добавлена возможность передавать в styles компонента массив стилей ([aa9685b](https://github.com/quarx-ui/quarx/commits/aa9685bc6d0b48bf92e445a0d1c8f2fc5d5fcc0f))


### Bug Fixes

* **Chips:** Исправлена анимация появления иконки состояния и мелкие исправления в стилях ([5c7e478](https://github.com/quarx-ui/quarx/commits/5c7e4786e1744aeebb9d2fb61ac5df513860164a))
* **DatePickerSelect:** Исправлена валидация периода allowDates ([#277](https://github.com/quarx-ui/quarx/issues/277)) ([bf3b675](https://github.com/quarx-ui/quarx/commits/bf3b675a9d68f482171348a5e6aedc26dd3114db))
* **DropdownItemsGroup:** Оптимизирована передача состояния скролла ([0271dc0](https://github.com/quarx-ui/quarx/commits/0271dc0a51eee40282aed3ea1316de1e55549b5c))
* **Modal:** Удален stopPropagation при клике на элемент ([bd23da3](https://github.com/quarx-ui/quarx/commits/bd23da3948c653c0e943a15591a3def4432f9967))
* Из devDependencies перенесены зависимости необходимые в сборке ([b27c583](https://github.com/quarx-ui/quarx/commits/b27c5839671dd4457e66488d41ba20e8f1b81367))
* Мелкие исправления ([12eb10d](https://github.com/quarx-ui/quarx/commits/12eb10de05d44d8f0ac770dd4513342b102408e9))



## [2.5.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.5.0&targetBranch=@quarx-ui/core@2.4.0) (2023-08-01)


### Features

* **Accordion:** Добавлена возможность передать иконку слева ([6380fff](https://github.com/quarx-ui/quarx/commits/6380fff97a9c8bd0c3b2d0424c5a2f47995a322a)), closes [#259](https://github.com/quarx-ui/quarx/issues/259)
* **DatePickerBlock:** добавлено скрытие секунд в полях ввода времени DatePickerBlock ([#263](https://github.com/quarx-ui/quarx/issues/263)) ([b752cf7](https://github.com/quarx-ui/quarx/commits/b752cf70cdedcab1a89da6e854a39d568d8d2a29))
* Добавлена функция для смешивания цветов с разной непрозрачностью, отрефакторены соседние утилиты ([56dc7b1](https://github.com/quarx-ui/quarx/commits/56dc7b187d7facdcb797a52f1bc8660af8eb9763))


### Bug Fixes

* **Collapse:** Анимация при первом триггере open при изначалном значении open=true ([60cd5fd](https://github.com/quarx-ui/quarx/commits/60cd5fd5017baad22bc121ac0b23e1ae11b41176))
* **createPalette:** Исправлен мердж темы при расширении ([7bf8722](https://github.com/quarx-ui/quarx/commits/7bf8722895539a7569183a31ce36379b38bee986))



## [2.4.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.4.0&targetBranch=@quarx-ui/core@2.3.0) (2023-07-18)


### Features

* **theme:** В тему добавлена базовая типографика ([2c32089](https://github.com/quarx-ui/quarx/commits/2c32089ce4bb8970fbe6df8f7b0bd6e356086dc5))
* Добавлен компонент **Alert** ([1613f40](https://github.com/quarx-ui/quarx/commits/1613f4090464d2083a532ce79b8af50d86a47798))
* Добавлен компонент **DatePicker** ([#254](https://github.com/quarx-ui/quarx/issues/254)) ([ba9c604](https://github.com/quarx-ui/quarx/commits/ba9c60495c41634a6522a001d3271f07e3baf491))
* Добавлен компонент **TimerCircle** ([3355ca8](https://github.com/quarx-ui/quarx/commits/3355ca89b914a09677842649e98d7f5d48a4389e))
* Добавлены компоненты **Text** и **Headline** ([39a92ab](https://github.com/quarx-ui/quarx/commits/39a92abca12df5eeed892b4eaefa41a6e9f19396)), closes [#222](https://github.com/quarx-ui/quarx/issues/222)


### Bug Fixes

* **Stack:** Исправлен конфликт css-переменных для дочерних элементов ([2d742f2](https://github.com/quarx-ui/quarx/commits/2d742f2761366d19c9edd08c3be397d62410437e))
* Типы `StackDirection` и `StackOrder` добавлены в экспорт ([#257](https://github.com/quarx-ui/quarx/issues/257)) ([f9f7baa](https://github.com/quarx-ui/quarx/commits/f9f7baa771a2b310a6c37eecf6c9cfc99b326e6d))



## [2.3.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.3.0&targetBranch=@quarx-ui/core@2.0.0) (2023-06-07)


### Features

* **ClickAwayLister:** Добавлена возможность игнорирования элементов ([#239](https://github.com/quarx-ui/quarx/issues/239)) ([dae1509](https://github.com/quarx-ui/quarx/commits/dae1509bee8a75803ba9b8e5cd6b2f0925090364))
* **Stack:** Добавлен boolean пропс для Divider ([15c8da8](https://github.com/quarx-ui/quarx/commits/15c8da8981775d35d5fb1449f1d16f01f72e5df5))
* Добавлен компонент **Collapse** ([#228](https://github.com/quarx-ui/quarx/issues/228)) ([d23ad79](https://github.com/quarx-ui/quarx/commits/d23ad79519cf82e29906440decbd2d2d13e81510))
* Добавлен компонент **Dropdown** ([#179](https://github.com/quarx-ui/quarx/issues/179)) ([26432b2](https://github.com/quarx-ui/quarx/commits/26432b2e55e87e759f990715050c57b0042f582b))
* Добавлена анимация компоненту  **Accordion** с помощью компонента **Collapse** ([d71caeb](https://github.com/quarx-ui/quarx/commits/d71caebf2726d849a8403f61851986980d9d16e0))


### Bug Fixes

* **Dropdown:** Исправлена типизация ([#238](https://github.com/quarx-ui/quarx/issues/238)) ([1cdd82a](https://github.com/quarx-ui/quarx/commits/1cdd82a22099385833406e606e30cd949e38d5e0))
* **palette:** Исправлено переопределение цветов при создании темы ([1bd244f](https://github.com/quarx-ui/quarx/commits/1bd244fa6145a1390fe2aaa3e996fb9aa534a87c))
* **Stack:** Ошибка при рендере детей по условию ([5f2f378](https://github.com/quarx-ui/quarx/commits/5f2f3781e5569b838e0ad8252259df66e867b792))
* Исправлен импорт `jsx` из emotion ([eaa2c21](https://github.com/quarx-ui/quarx/commits/eaa2c2153af501ae987a0f31416158d11595eaeb))
* Исправлена типизация сборки ([f76cd5f](https://github.com/quarx-ui/quarx/commits/f76cd5f44e36b4dee4c550b3ad33efcec7237226))


### Code Refactoring

* Изменен хук useBooleanState ([043ebb7](https://github.com/quarx-ui/quarx/commits/043ebb744b767b046ec960f9a6df30766cd293eb))



## [2.2.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.2.0&targetBranch=@quarx-ui/core@2.0.0) (2023-06-06)


### Features

* **ClickAwayLister:** Добавлена возможность игнорирования элементов ([#239](https://github.com/quarx-ui/quarx/issues/239)) ([dae1509](https://github.com/quarx-ui/quarx/commits/dae1509bee8a75803ba9b8e5cd6b2f0925090364))
* **Stack:** Добавлен boolean пропс для Divider ([15c8da8](https://github.com/quarx-ui/quarx/commits/15c8da8981775d35d5fb1449f1d16f01f72e5df5))
* Добавлен компонент **Collapse** ([#228](https://github.com/quarx-ui/quarx/issues/228)) ([d23ad79](https://github.com/quarx-ui/quarx/commits/d23ad79519cf82e29906440decbd2d2d13e81510))
* Добавлен компонент **Dropdown** ([#179](https://github.com/quarx-ui/quarx/issues/179)) ([26432b2](https://github.com/quarx-ui/quarx/commits/26432b2e55e87e759f990715050c57b0042f582b))
* Добавлена анимация компоненту  **Accordion** с помощью компонента **Collapse** ([d71caeb](https://github.com/quarx-ui/quarx/commits/d71caebf2726d849a8403f61851986980d9d16e0))


### Bug Fixes

* **Dropdown:** Исправлена типизация ([#238](https://github.com/quarx-ui/quarx/issues/238)) ([1cdd82a](https://github.com/quarx-ui/quarx/commits/1cdd82a22099385833406e606e30cd949e38d5e0))
* **palette:** Исправлено переопределение цветов при создании темы ([1bd244f](https://github.com/quarx-ui/quarx/commits/1bd244fa6145a1390fe2aaa3e996fb9aa534a87c))
* **Stack:** Ошибка при рендере детей по условию ([5f2f378](https://github.com/quarx-ui/quarx/commits/5f2f3781e5569b838e0ad8252259df66e867b792))
* Исправлен импорт `jsx` из emotion ([eaa2c21](https://github.com/quarx-ui/quarx/commits/eaa2c2153af501ae987a0f31416158d11595eaeb))
* Исправлена типизация сборки ([f76cd5f](https://github.com/quarx-ui/quarx/commits/f76cd5f44e36b4dee4c550b3ad33efcec7237226))


### Code Refactoring

* Изменен хук useBooleanState ([043ebb7](https://github.com/quarx-ui/quarx/commits/043ebb744b767b046ec960f9a6df30766cd293eb))



## [2.1.0](https://github.com/quarx-ui/quarx/compare/diff?sourceBranch=@quarx-ui/core@2.1.0&targetBranch=@quarx-ui/core@2.0.0) (2023-06-02)


### Features

* **Stack:** Добавлен boolean пропс для Divider ([15c8da8](https://github.com/quarx-ui/quarx/commits/15c8da8981775d35d5fb1449f1d16f01f72e5df5))
* Добавлен компонент **Collapse** ([#228](https://github.com/quarx-ui/quarx/issues/228)) ([d23ad79](https://github.com/quarx-ui/quarx/commits/d23ad79519cf82e29906440decbd2d2d13e81510))
* Добавлен компонент **Dropdown** ([#179](https://github.com/quarx-ui/quarx/issues/179)) ([26432b2](https://github.com/quarx-ui/quarx/commits/26432b2e55e87e759f990715050c57b0042f582b))
* Добавлена анимация компоненту  **Accordion** с помощью компонента **Collapse** ([d71caeb](https://github.com/quarx-ui/quarx/commits/d71caebf2726d849a8403f61851986980d9d16e0))


### Bug Fixes

* **Stack:** Ошибка при рендере детей по условию ([5f2f378](https://github.com/quarx-ui/quarx/commits/5f2f3781e5569b838e0ad8252259df66e867b792))
* Исправлен импорт `jsx` из emotion ([eaa2c21](https://github.com/quarx-ui/quarx/commits/eaa2c2153af501ae987a0f31416158d11595eaeb))
* Исправлена типизация сборки ([f76cd5f](https://github.com/quarx-ui/quarx/commits/f76cd5f44e36b4dee4c550b3ad33efcec7237226))


### Code Refactoring

* Изменен хук useBooleanState ([043ebb7](https://github.com/quarx-ui/quarx/commits/043ebb744b767b046ec960f9a6df30766cd293eb))



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
