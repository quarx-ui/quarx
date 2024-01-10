import { Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbProps } from '@core';

export const SandboxStory: Story<BreadcrumbProps> = ({ ...props }) => (
    <Breadcrumb {...props} />
);

SandboxStory.storyName = 'Компонент';
