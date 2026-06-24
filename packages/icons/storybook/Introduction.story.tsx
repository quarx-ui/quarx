import ReadmeMD from '@quarx-ui/icons/README.md?raw';
import { StoryFn } from '@storybook/react-vite';
import { Description } from '@storybook/addon-docs/blocks';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';

export default {
    title: 'icons/Introduction',
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
                <Description
                    markdown={ReadmeMD}
                />
            ),
        },
    },
};

export const Introduction: StoryFn = () => <div />;
