import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ArgsTable, PRIMARY_STORY, Title, Subtitle, Description } from '@storybook/addon-docs';
import { BASE_ARG_TYPES } from '../storybook/BASE_ARG_TYPES';
import Cover from './cover.story.png';

const descriptionMarkDown = `
* Документацию к каждому из компонентов можно прочесть в ComponentName/Documentation.
Если такого файла нет, то ComponentName/AnyFile =&gt; Docs.
* Пример использования отдельного компонента можно увидеть,
перейдя в SandBox =&gt; Docs и нажав &quot;Show Code&quot;.
* При помощи canvas в ComponentName/SandBox можно поэкспериментировать со свойствами компонента.
` as const;
export default {
    title: 'Introduction',
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
                <div>
                    <Title>Библиотека общих UI компонентов</Title>
                    <img width="80%" height="auto" src={Cover} alt="Библиотека общих UI компонентов" />
                    <Description markdown={descriptionMarkDown} />
                    <Subtitle>Стандартные свойства компонентов</Subtitle>
                    <Description>У каждого компонента есть ряд стандартных свойств:</Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </div>
            ),
        },
    },
};

export const Introduction: Story = () => <div />;
