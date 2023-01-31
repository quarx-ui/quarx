import { Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbProps, QX_SIZE } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

const sizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];

export const SizesStory: Story<BreadcrumbProps> = (props) => (
    <Row>
        {sizes.map((value) => (
            <Column key={value}>
                <Title>{value}</Title>
                <Breadcrumb {...props} size={value} />
            </Column>
        ))}
    </Row>
);

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
