import { Story } from '@storybook/react/types-6-0';
import { BaseTypography, BaseTypographyProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<BaseTypographyProps> = ({ ...props }) => (
    <BaseTypography {...props} />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
