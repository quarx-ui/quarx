import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, useBooleanState } from '@core';

const Template: Story<DropdownItemProps> = ({
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

export const SandboxStory: Story<DropdownItemProps> = Template.bind({});
SandboxStory.storyName = 'Компонент';
