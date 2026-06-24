import { StoryFn } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbProps, PALETTE_COLORS } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ColorsStory: StoryFn<BreadcrumbProps> = (props) => (
    <Column>
        <Title>Только для типа link</Title>
        <Row>
            {Object.values(PALETTE_COLORS).map((value) => (
                <Column key={value}>
                    <Title>{value}</Title>
                    <Breadcrumb
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
