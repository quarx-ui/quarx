import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { SelectionTree, SelectionTreeProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: StoryFn<SelectionTreeProps> = ({
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

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
