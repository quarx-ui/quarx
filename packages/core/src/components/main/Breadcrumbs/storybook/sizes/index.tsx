import { StoryFn } from '@storybook/react-vite';
import { Breadcrumbs, BreadcrumbsProps, QX_SIZE } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const sizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];

export const SizesStory: StoryFn<BreadcrumbsProps> = (props) => (
    <Row>
        {sizes.map((value) => (
            <Column key={value}>
                <Title>{value}</Title>
                <Breadcrumbs {...props} size={value} />
            </Column>
        ))}
    </Row>
);

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
