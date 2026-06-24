import { StoryFn } from '@storybook/react-vite';
import { Breadcrumbs, BreadcrumbsProps } from '@core';

export const SandboxStory: StoryFn<BreadcrumbsProps> = (props) => (
    <Breadcrumbs {...props} />
);

SandboxStory.storyName = 'Компонент';
