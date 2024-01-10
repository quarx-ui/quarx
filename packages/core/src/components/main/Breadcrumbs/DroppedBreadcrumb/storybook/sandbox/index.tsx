import { Story } from '@storybook/react/types-6-0';
import { DroppedBreadcrumb, DroppedBreadcrumbProps } from '@core';

export const SandboxStory: Story<DroppedBreadcrumbProps> = ({ ...props }) => (
    <DroppedBreadcrumb {...props} />
);

SandboxStory.storyName = 'Компонент';
