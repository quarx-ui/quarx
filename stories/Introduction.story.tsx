import { StoryFn } from '@storybook/react-vite';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { MarkdownDocument } from '@quarx-ui/core/storybook/components';
import ReadmeMD from '../README.md?raw';

export default {
    title: 'Introduction',
    argTypes: BASE_ARG_TYPES,
    parameters: {
        viewMode: 'docs',
        controls: { disable: true },
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            page: (): JSX.Element => (
                <MarkdownDocument markdown={ReadmeMD} />
            ),
        },
    },
};

export const Introduction: StoryFn = () => <MarkdownDocument markdown={ReadmeMD} />;
