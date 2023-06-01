import { Story } from '@storybook/react/types-6-0';
import { useBooleanState, Selection } from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import { CONTROLLER_OPTIONS, getController, SelectionTemplateProps } from '../utils';

export const SandboxStory: Story<SelectionTemplateProps> = ({
    children,
    ...props
}) => {
    const [state, { toggleState }] = useBooleanState(false);
    return (
        <StoryDarkerContainer>
            <Selection {...props}>
                {getController({
                    checked: state,
                    onChange: toggleState,
                    variant: children ?? CONTROLLER_OPTIONS.Checkbox,
                })}
            </Selection>
        </StoryDarkerContainer>
    );
};

SandboxStory.storyName = 'Компонент';
