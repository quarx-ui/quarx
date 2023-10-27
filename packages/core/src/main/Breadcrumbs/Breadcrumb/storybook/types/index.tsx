import { Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BREADCRUMB_TYPE, BreadcrumbProps } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const TypesStory: Story<BreadcrumbProps> = (props) => (
    <Row>
        {Object.values(BREADCRUMB_TYPE).map((value) => (
            <Column key={value}>
                <Title>{value}</Title>
                <Breadcrumb {...props} type={value} />
            </Column>
        ))}
    </Row>
);

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
