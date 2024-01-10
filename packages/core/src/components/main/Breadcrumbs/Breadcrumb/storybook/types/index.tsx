import { Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BREADCRUMB_TYPE, BreadcrumbProps } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

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
