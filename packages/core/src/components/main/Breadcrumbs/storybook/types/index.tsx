import { Story } from '@storybook/react/types-6-0';
import { BREADCRUMB_TYPE, Breadcrumbs, BreadcrumbsProps } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

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
