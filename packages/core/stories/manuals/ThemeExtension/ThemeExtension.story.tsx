import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { MarkdownDocument } from '@quarx-ui/core/storybook/components';
import { StoryFn, Meta } from '@storybook/react-vite';
import descriptionMarkDown from './description.md?raw';

const description = `# Расширение темы
${descriptionMarkDown}`;

export default {
    title: 'core/manuals',
    argTypes: BASE_ARG_TYPES,
    parameters: {
        viewMode: 'docs',
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

export const ThemeExtension: StoryFn = () => <MarkdownDocument markdown={description} />;
ThemeExtension.storyName = 'Расширение темы';
