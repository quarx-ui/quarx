/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import { ElementType, forwardRef } from 'react';
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { Tabs } from '@core';
import { createStoryDescription } from '@core/storybook/utils';
import { TabsProps } from '../../types';
import description from './description.md';

export const CustomComponentStory: Story<TabsProps> = (props) => {
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

CustomComponentStory.storyName = 'Свой тег/компонент';
CustomComponentStory.argTypes = excludeProp(['type']);
CustomComponentStory.parameters = createStoryDescription(description);
