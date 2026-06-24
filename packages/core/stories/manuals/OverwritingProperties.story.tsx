import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { MarkdownDocument } from '@quarx-ui/core/storybook/components';
import { StoryFn, Meta } from '@storybook/react-vite';

const descriptionMarkDown = `
Компоненты, которые перезаписывают одинаковые свойства, работают по следующим принципам синхронизации:

| Свойства родительского компонента | Свойства [родительского, дочернего] | Свойства дочернего компонента |
| --------------------------------- |:-----------------------------------:| -----------------------------:|
| Передан 'medium'                  | ['medium', 'large']                 | Передан 'large'               |
| Передан undefined                 | ['large', 'large']                  | Передан 'large'               |
| Передан 'medium'                  | ['medium', 'medium']                | Передан undefined             |
| Передан undefined                 | [parent_default, parent_default]    | Передан undefined             |


Несколько более конкретных примеров:

\`\`\`jsx
/**
* ParentComponent перезаписывает свойство size дочернего компонента.
* У ParentComponent size будет равен "large".
* У ChildrenComponent size будет равен "small".
*/
<ParentComponent size="large">
    <ChildrenComponent size="small" />
</ParentComponent>
\`\`\`

\`\`\`jsx
/**
* ParentComponent перезаписывает свойство size дочернего компонента.
* В данной ситуации и у ParentComponent, и у ChildrenComponent size будет равен "medium".
*/
<ParentComponent size="medium">
    <ChildrenComponent />
</ParentComponent>
\`\`\`

\`\`\`jsx
/**
* ParentComponent перезаписывает свойство size дочернего компонента.
* В данной ситуации и у ParentComponent, и у ChildrenComponent size будет равен "large".
*/
<ParentComponent>
    <ChildrenComponent size="large"/>
</ParentComponent>
\`\`\`

\`\`\`jsx
/**
* ParentComponent перезаписывает свойство size дочернего компонента.
* В данной ситуации и у ParentComponent, и у ChildrenComponent size будет равен "small",
* так как у ParentComponent по умолчанию size="small"
*/
<ParentComponent>
    <ChildrenComponent />
</ParentComponent>
\`\`\`
` as const;

const description = `# Перезапись свойств дочернего компонента
${descriptionMarkDown}`;

export default {
    title: 'core/manuals',
    argTypes: BASE_ARG_TYPES,
    parameters: {
        viewMode: 'docs',
        controls: { disable: true },
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            page: (): JSX.Element => (
                <MarkdownDocument markdown={description} />
            ),
        },
    },
} as Meta;

export const OverwritingProperties: StoryFn = () => <MarkdownDocument markdown={description} />;
OverwritingProperties.storyName = 'Перезапись свойств дочерних компонентов';
