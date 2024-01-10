import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { SelectionListProps, SelectionList } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            <SelectionList
                {...props}
                nodes={selectionList}
                onUpdate={setList}
            />
        </StoryDarkerContainer>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
