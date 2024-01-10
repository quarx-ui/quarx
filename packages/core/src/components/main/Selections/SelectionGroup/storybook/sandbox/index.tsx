import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { SelectionGroup } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { getTemplateChildren, TemplateSelectionGroupProps, useTemplateChildren } from '../utils';

export const SandboxStory: Story<TemplateSelectionGroupProps> = (props) => {
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
