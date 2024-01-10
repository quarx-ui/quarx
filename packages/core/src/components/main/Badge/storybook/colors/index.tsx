import { Badge, BadgeColor, BadgeProps } from '@core';
import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

const COLORS: BadgeColor[] = ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'];

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
});

export const ColorsStory: Story<BadgeProps> = (props) => (
    <Flex>
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            componentProps: {
                ...props,
                type: 'contained',
            },
            direction: 'vertical',
        })}
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            direction: 'vertical',
            componentProps: {
                ...props,
                type: 'outlined',
            },
        })}
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            direction: 'vertical',
            componentProps: {
                ...props,
                type: 'ghosted',
            },
        })}
    </Flex>
);

setStoryParams(ColorsStory, {
    title: 'Цвета',
    description,
    excludeArgs: ['leftItemShown', 'rightItemShown', 'counterShown', 'color'],
});
