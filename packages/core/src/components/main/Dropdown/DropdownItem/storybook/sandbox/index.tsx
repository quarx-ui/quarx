import { StoryFn } from '@storybook/react-vite';
import { DropdownItem, DropdownItemProps, useBooleanState } from '@core';

export const SandboxStory: StoryFn<DropdownItemProps> = ({
    state: externalState = false,
    ...props
}) => {
    const [state, { toggleState }] = useBooleanState(externalState);
    return (
        <DropdownItem
            state={state}
            onChange={toggleState}
            {...props}
        />
    );
};
SandboxStory.storyName = 'Компонент';
