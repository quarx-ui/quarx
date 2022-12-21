import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Description, Title } from '@storybook/addon-docs';
import { Story } from '@storybook/react/types-6-0';
import { Div } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

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

export default {
    title: STORY_PATHS.core.manuals(),
    argTypes: BASE_ARG_TYPES,
    parameters: {
        viewMode: 'docs',
        controls: { disable: true },
        actions: { disable: true },
        design: { disable: true },
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            page: (): JSX.Element => (
                <Div>
                    <Title>
                        Перезапись свойств дочернего компонента
                    </Title>
                    <Description
                        markdown={descriptionMarkDown}
                    />
                </Div>
            ),
        },
    },
};

export const OverwritingProperties: Story = () => <div />;
OverwritingProperties.storyName = 'Перезапись свойств дочерних компонентов';
