import { Story } from '@storybook/react/types-6-0';
import { useBooleanState, Selection } from '@core';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
