import { Story } from '@storybook/react/types-6-0';
import { BREADCRUMB_TYPE, Breadcrumbs, BreadcrumbsProps } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const CustomDividersStory: Story<BreadcrumbsProps> = (props) => (
    <Row>
        {Object.values(BREADCRUMB_TYPE).map((value) => (
            <Column key={value}>
                <Title>
                    {`Разделитель - для типа ${value}`}
                </Title>
                <Breadcrumbs
                    {...props}
                    type={value}
                    divider="-"
                />
            </Column>
        ))}
    </Row>
);

setStoryParams(CustomDividersStory, {
    title: 'Пользовательский разделитель',
    excludeArgs: ['type', 'divider'],
});
