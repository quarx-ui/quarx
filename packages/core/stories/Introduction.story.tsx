import React from 'react';
import ReadmeMD from '@quarx-ui/core/README.md';
import { Story } from '@storybook/react/types-6-0';
import { ArgsTable, PRIMARY_STORY, Subtitle, Description } from '@storybook/addon-docs';
import { Div } from '@storybook/components';
import { BASE_ARG_TYPES } from '../storybook/BASE_ARG_TYPES';

export default {
    title: 'core/Introduction',
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
                    <Description markdown={ReadmeMD} />
                    <Subtitle>
                        Стандартные свойства компонентов
                    </Subtitle>
                    <Description>
                        У каждого компонента есть ряд стандартных свойств:
                    </Description>
                    <ArgsTable story={PRIMARY_STORY} />
                </Div>
            ),
        },
    },
};

export const Introduction: Story = () => <div />;
