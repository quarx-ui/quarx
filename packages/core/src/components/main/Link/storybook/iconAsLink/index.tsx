import { StoryFn } from '@storybook/react-vite';
import { Link, LinkProps } from '@core';
import { Gear24 } from '@core/components/main/Link/storybook/assets';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

export const IconAsLinkStory: StoryFn<LinkProps> = (_) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
        underline="none"
    >
        <Gear24 />
    </Link>
);

setStoryParams(IconAsLinkStory, {
    title: 'Ссылка-иконка',
    description,
});
