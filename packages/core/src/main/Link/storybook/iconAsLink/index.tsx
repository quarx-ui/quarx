import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '@core';
import { Gear24 } from '@core/src/main/Link/storybook/assets';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

export const IconAsLinkStory: Story<LinkProps> = (_) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
        underline="none"
    >
        <Gear24 />
    </Link>
);

IconAsLinkStory.storyName = 'Ссылка-иконка';
IconAsLinkStory.parameters = createStoryDescription(description);
