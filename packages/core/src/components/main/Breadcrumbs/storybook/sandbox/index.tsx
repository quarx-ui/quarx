import { Story } from '@storybook/react/types-6-0';
import { Breadcrumbs, BreadcrumbsProps } from '@core';

export const SandboxStory: Story<BreadcrumbsProps> = (props) => (
    <Breadcrumbs {...props} />
);

SandboxStory.storyName = 'Компонент';
