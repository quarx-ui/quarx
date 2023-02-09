import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, useBooleanState } from '@core';

export const SandboxStory: Story<DropdownItemProps> = ({
    state: externalState = false,
    ...props
}) => {
    const { state, setOppositeState } = useBooleanState(externalState);
    return (
        <DropdownItem
            state={state}
            onChange={setOppositeState}
            {...props}
        />
    );
};
SandboxStory.storyName = 'Компонент';
