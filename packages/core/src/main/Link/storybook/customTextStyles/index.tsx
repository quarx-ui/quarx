import { Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
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

CustomTextStylesStory.storyName = 'Кастомизация шрифта';
CustomTextStylesStory.parameters = createStoryDescription(description);
