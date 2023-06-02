import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '@core';
import { Gear24 } from '@core/src/main/Link/storybook/assets';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

export const IconAsLinkStory: Story<LinkProps> = (_) => (
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
