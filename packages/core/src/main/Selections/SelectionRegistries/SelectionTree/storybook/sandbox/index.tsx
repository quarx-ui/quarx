import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { SelectionTree, SelectionTreeProps } from '@core';

export const SandboxStory: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            <SelectionTree
                {...props}
                nodes={selectionTree}
                onUpdate={setTree}
            />
        </StoryDarkerContainer>
    );
};

SandboxStory.storyName = 'Компонент';
