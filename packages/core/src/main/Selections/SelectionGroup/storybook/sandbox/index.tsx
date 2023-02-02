import { StoryDarkerContainer } from '@core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { SelectionGroup } from '@core';
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

SandboxStory.storyName = 'Компонент';
