import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { Description, Title } from '@storybook/addon-docs';
import { Story } from '@storybook/react/types-6-0';
import { Div } from '@storybook/components';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import description from './description.md';

export default {
    title: STORY_PATHS.core.manuals(),
    argTypes: BASE_ARG_TYPES,
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            page: (): JSX.Element => (
                <Div>
                    <Title>
                        Расширение темы
                    </Title>
                    <Description
                        markdown={description}
                    />
                </Div>
            ),
        },
    },
} as Meta;

export const ThemeExtension: Story = () => <div />;
ThemeExtension.storyName = 'Расширение темы';
