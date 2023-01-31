import { Story } from '@storybook/react/types-6-0';
import { Breadcrumbs, BreadcrumbsProps, PALETTE_COLORS } from '@core';
import { Column, Row, Title } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const ColorsStory: Story<BreadcrumbsProps> = (props) => (
    <Column>
        <Title>Только для типа link</Title>
        <Row>
            {Object.values(PALETTE_COLORS).map((value) => (
                <Column key={value}>
                    <Title>{value}</Title>
                    <Breadcrumbs
                        {...props}
                        type="link"
                        color={value}
                    />
                </Column>
            ))}
        </Row>
    </Column>
);

setStoryParams(ColorsStory, {
    title: 'Цвета',
    excludeArgs: ['color', 'type'],
});
