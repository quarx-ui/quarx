import { Fragment, useState } from 'react';
import { StoryButton } from '@core/storybook/components';
import { SidePage, SidePageProps } from '@core';
import { Story } from '@storybook/react/types-6-0';

export const SandboxStory: Story<SidePageProps> = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <StoryButton
                onClick={() => setOpen(true)}
            >
                Открыть
            </StoryButton>
            <SidePage
                {...props}
                open={props.open || open}
                onClose={() => setOpen(false)}
            />
        </Fragment>
    );
};

SandboxStory.storyName = 'Компонент';
