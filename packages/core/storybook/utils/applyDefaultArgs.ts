import { Story } from '@storybook/react/types-6-0';

export const applyDefaultArgs = <Props extends object>(
    stories: Story<Props>[],
    args: Partial<Props>,
): void => {
    stories.forEach((variant, index) => {
        // eslint-disable-next-line no-param-reassign
        stories[index].args = args;
    });
};
