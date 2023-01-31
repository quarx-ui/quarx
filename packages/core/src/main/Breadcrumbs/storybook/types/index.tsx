import { Story } from '@storybook/react/types-6-0';
import { BREADCRUMB_TYPE, Breadcrumbs, BreadcrumbsProps } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const TypesStory: Story<BreadcrumbsProps> = (props) => (
    <Row>
        {Object.values(BREADCRUMB_TYPE).map((value) => (
            <Column key={value}>
                <Title>{value}</Title>
                <Breadcrumbs {...props} type={value} />
            </Column>
        ))}
    </Row>
);

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
