import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import description from './description.md';

export const UseInTextStory: Story<LinkProps> = (_) => (
    <p>
        За клиентским интерфейсом кроется клубок
        {' '}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>сложных систем</Link>
        {' '}
        работы с контентом, аналитики и настройки.
    </p>
);

UseInTextStory.storyName = 'Использование в тексте';
UseInTextStory.parameters = createStoryDescription(description);
