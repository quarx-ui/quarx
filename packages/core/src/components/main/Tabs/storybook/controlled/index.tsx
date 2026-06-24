import { useState } from 'react';
import styled from '@emotion/styled';
import { StoryFn } from '@storybook/react-vite';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { Tabs } from '../..';
import { TabsProps } from '../../types';
import description from './description.md?raw';

const DIV = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const ControlledStory: StoryFn<TabsProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [selectedTab, setSelectedTab] = useState(props.items[0]);

    return (
        <DIV>
            {DisplayVariants({
                property: 'type',
                containerAlign: 'flex-start',
                values: ['default', 'contained', 'segmented'],
                component: Tabs,
                componentProps: {
                    ...props,
                    value: selectedTab.value,
                    onSetValue: setSelectedTab,
                    style: { marginBottom: 16 },
                },
            })}
        </DIV>
    );
};

setStoryParams(ControlledStory, {
    title: 'Внешнее управление',
    description,
    excludeArgs: ['value', 'type'],
});
