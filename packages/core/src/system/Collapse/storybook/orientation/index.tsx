import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Collapse, CollapseProps } from '@core';
import { Column, StoryButton } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { Children } from '../common';

export const OrientationStory: Story<CollapseProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <Column>
            <StoryButton
                onClick={() => setOpen((prevState) => !prevState)}
                style={{ marginBottom: 20 }}
            >
                {open ? 'close' : 'open'}
            </StoryButton>
            <Collapse {...props} open={open} style={{ alignSelf: 'flex-start' }}>
                <Children>
                    Lorem ipsum
                </Children>
            </Collapse>
            <StoryButton
                onClick={() => setOpen2((prevState) => !prevState)}
                style={{ marginBottom: 20, marginTop: 30 }}
            >
                {open2 ? 'close' : 'open'}
            </StoryButton>
            <Collapse {...props} open={open2} style={{ alignSelf: 'flex-start' }} orientation="horizontal">
                <Children>
                    Lorem ipsum
                </Children>
            </Collapse>
        </Column>
    );
};

setStoryParams(OrientationStory, {
    title: 'Вертикальное и горизонтальное направления скрытия элемента',
    excludeArgs: ['orientation'],
});
