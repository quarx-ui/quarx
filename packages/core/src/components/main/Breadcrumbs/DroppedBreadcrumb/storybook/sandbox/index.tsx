import { StoryFn } from '@storybook/react-vite';
import { DroppedBreadcrumb, DroppedBreadcrumbProps } from '@core';

export const SandboxStory: StoryFn<DroppedBreadcrumbProps> = ({ ...props }) => (
    <DroppedBreadcrumb {...props} />
);

SandboxStory.storyName = 'Компонент';
