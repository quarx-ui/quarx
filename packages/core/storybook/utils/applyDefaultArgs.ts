import { StoryFn } from '@storybook/react-vite';

export const applyDefaultArgs = <Props extends object>(
    stories: StoryFn<Props>[],
    args: Partial<Props>,
): void => {
    stories.forEach((variant, index) => {
        // eslint-disable-next-line no-param-reassign
        stories[index].args = args;
    });
};
