import { StoryFn } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbProps } from '@core';
import { Column, Row, Title } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const lengths = [2, 5, 10, Infinity];

export const LengthStory: StoryFn<BreadcrumbProps> = (props) => (
    <Row>
        {lengths.map((value) => (
            <Column key={value}>
                <Title>{value}</Title>
                <Breadcrumb
                    {...props}
                    maxCrumbLength={value}
                />
            </Column>
        ))}
    </Row>
);

setStoryParams(LengthStory, {
    title: 'Сокращения',
    excludeArgs: ['maxCrumbLength'],
});
