import { StoryFn } from '@storybook/react-vite';
import { Link, LinkProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md?raw';

export const UseInTextStory: StoryFn<LinkProps> = (_) => (
    <p>
        За клиентским интерфейсом кроется клубок
        {' '}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link>сложных систем</Link>
        {' '}
        работы с контентом, аналитики и настройки.
    </p>
);

setStoryParams(UseInTextStory, {
    title: 'Использование в тексте',
    description,
});
