import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { StoryFn } from '@storybook/react-vite';
import { SelectionGroup } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { getTemplateChildren, TemplateSelectionGroupProps, useTemplateChildren } from '../utils';

export const SandboxStory: StoryFn<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            <SelectionGroup {...props}>
                {getTemplateChildren({ nodes, setNodes, ...props })}
            </SelectionGroup>
        </StoryDarkerContainer>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
