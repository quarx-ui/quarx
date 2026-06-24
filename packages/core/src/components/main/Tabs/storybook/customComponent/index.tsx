/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { ElementType, forwardRef } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Tabs } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TabsProps } from '../../types';
import description from './description.md?raw';

export const CustomComponentStory: StoryFn<TabsProps> = (props) => {
    const Link: ElementType = forwardRef(({ to, ...rest }, ref) => (
        <div
            ref={ref}
            {...rest}
            onClick={(e) => {
                alert(`Переход к ${to}`);
                rest.onClick(e);
            }}
        />
    ));

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Tabs
                {...props}
                /* eslint-disable-next-line react/destructuring-assignment */
                items={props.items.map((item) => ({ ...item, href: `#${item.value}` }))}
                type="contained"
                TabItemComponent="a"
                style={{ marginBottom: 16 }}
            />
            <Tabs
                {...props}
                /* eslint-disable-next-line react/destructuring-assignment */
                items={props.items.map((item) => ({ ...item, to: item.label }))}
                type="segmented"
                TabItemComponent={Link}
            />
        </div>
    );
};

setStoryParams(CustomComponentStory, {
    title: 'Свой тег/компонент',
    description,
    excludeArgs: ['type'],
});
