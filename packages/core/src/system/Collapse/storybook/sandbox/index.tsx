import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Collapse, CollapseProps } from '@core';
import { Column, StoryButton } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { Children } from '../common';
import description from './description.md';

export const SandboxStory: Story<CollapseProps> = (props) => {
    const [open, setOpen] = useState(false);

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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolor earum eum ex facere in
                    incidunt
                    laboriosam mollitia obcaecati porro praesentium quam quasi qui quibusdam rerum sapiente suscipit,
                    unde
                    velit?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolor earum eum ex facere in
                    incidunt
                    laboriosam mollitia obcaecati porro praesentium quam quasi qui quibusdam rerum sapiente suscipit,
                    unde
                    velit?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolor earum eum ex facere in
                    incidunt
                    laboriosam mollitia obcaecati porro praesentium quam quasi qui quibusdam rerum sapiente suscipit,
                    unde
                    velit?
                </Children>
            </Collapse>
        </Column>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
    description,
});
