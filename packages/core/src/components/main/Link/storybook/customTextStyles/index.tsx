import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

export const CustomTextStylesStory: Story<LinkProps> = (_) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
        styles={{
            content: {
                fontWeight: 'bold',
                fontStyle: 'italic',
            },
        }}
    >
        Ссылка с жирным курсивным шрифтом
    </Link>
);

setStoryParams(CustomTextStylesStory, {
    title: 'Кастомизация шрифта',
    description,
});
