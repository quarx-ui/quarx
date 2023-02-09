import { Story } from '@storybook/react/types-6-0';
import { Button, Dropdown, DropdownProps, useBooleanState } from '@core';
import { Fragment, useRef } from 'react';
import { createDropdownChildren } from '../template';

const Template: Story<DropdownProps> = ({
    size,
    ...props
}) => {
    const {
        state,
        setTrue,
        setFalse,
    } = useBooleanState(false);
    const ref = useRef<HTMLButtonElement>(null);

    return (
        <Fragment>
            <div style={{ position: 'relative' }}>
                <Button
                    ref={ref}
                    size={size}
                    type="outlined"
                    color="secondary"
                    onClick={setTrue}
                >
                    Dropdown
                </Button>
                <Dropdown
                    {...props}
                    size={size}
                    open={state}
                    anchor={ref}
                    onClickAway={setFalse}
                >
                    {createDropdownChildren({ size, ...props })}
                </Dropdown>
            </div>
        </Fragment>
    );
};

export const SandboxStory = Template.bind({});
SandboxStory.storyName = 'Компонент';
