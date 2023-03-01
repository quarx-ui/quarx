import ReadmeMD from '@quarx-ui/icons/README.md';
import { Story } from '@storybook/react/types-6-0';
import { Description } from '@storybook/components';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';

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

export const Introduction: Story = () => <div />;
