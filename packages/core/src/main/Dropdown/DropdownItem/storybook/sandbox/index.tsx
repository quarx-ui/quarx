import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, useBooleanState } from '@core';

export const SandboxStory: Story<DropdownItemProps> = ({
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
