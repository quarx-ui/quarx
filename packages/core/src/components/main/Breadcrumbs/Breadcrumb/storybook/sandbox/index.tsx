import { StoryFn } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbProps } from '@core';

export const SandboxStory: StoryFn<BreadcrumbProps> = ({ ...props }) => (
    <Breadcrumb {...props} />
);

SandboxStory.storyName = 'Компонент';
