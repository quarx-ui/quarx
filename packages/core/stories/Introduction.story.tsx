import ReadmeMD from '@quarx-ui/core/README.md?raw';
import { StoryFn, Meta } from '@storybook/react-vite';
import { MarkdownDocument } from '@quarx-ui/core/storybook/components';
import { BASE_ARG_TYPES } from '../storybook/BASE_ARG_TYPES';

const description = `${ReadmeMD}

## Стандартные свойства компонентов
У каждого компонента есть ряд стандартных свойств.
`;

export default {
    title: 'core/Introduction',
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

export const Introduction: StoryFn = () => <MarkdownDocument markdown={description} />;
