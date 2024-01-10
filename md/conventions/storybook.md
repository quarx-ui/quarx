# Правила написания storybook

1. Наименование каждой истории должно быть с постфиксом Story. Пример: SizeStory
2. DefaultArgs описываются только в Component.story.tsx при экспорте. Дополнительно применять к каждой нет необходимости, за исключением случаев, когда вам необходимо проставить конкретной истории параметры. В таком случае присваивать сразу в файле index.tsx вашей истории
3. Для настройки Story (заголовок, описание, defaultArgs и т.д.) используется функция `setStoryParams`:
```ts
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

setStoryParams(ExampleStory, {
    title: 'Пример заголовка',
    description: 'Какое-то описание',
    excludeArgs: ['исключаем', 'аргументы', 'из', 'таблицы'],
    args: ['дефолтные', 'пропсы', 'компонента'],
    code: 'Исходный код компонента',
});
```
4. Story в Component.story.tsx экспортируются в следующем формате `export { SandBoxStory } from './sandbox'`
5. Каждая история должна иметь типизацию. Пример: `const SizeStory: Story<ComponentProps> = () => {};`
6. Код компонента для каждой истории должен отображаться корректно, чтобы можно было его сразу скопировать и использовать на практике.
7. Структура каталогов:
```
    - Component
        - storybook
            - story1
                - index.tsx
                - description.md (опционально)
            - story2
                - index.tsx
                - description.md (опционально)
            Component.story.tsx
```