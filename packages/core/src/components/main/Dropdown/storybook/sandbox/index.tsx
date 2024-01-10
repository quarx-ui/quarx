import { Story } from '@storybook/react/types-6-0';
import { Button, Dropdown, DropdownProps, useBooleanState } from '@core';
import { Fragment, useRef } from 'react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { createDropdownChildren } from '../template';

export const SandboxStory: Story<DropdownProps> = ({
    open,
    size,
    ...props
}) => {
    const [state, { setTrue, setFalse }] = useBooleanState(false);
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
                    open={open || state}
                    anchor={ref}
                    onClickAway={setFalse}
                >
                    {createDropdownChildren({ size, ...props })}
                </Dropdown>
            </div>
        </Fragment>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
