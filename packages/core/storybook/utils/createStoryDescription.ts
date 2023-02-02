import { Parameters } from '@storybook/csf/dist/story';

export const createStoryDescription = (
    description: string,
): Parameters => ({
    docs: { description: { story: description } },
});
