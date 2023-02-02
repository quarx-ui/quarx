import { useState } from 'react';
import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { SelectionTree, SelectionTreeProps, SELECTION_GROUP_TYPE } from '@core';

export const TypesStory: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'type',
                containerAlign: 'flex-start',
                values: Object.values(SELECTION_GROUP_TYPE),
                component: SelectionTree,
                componentProps: {
                    ...props,
                    nodes: selectionTree,
                    onUpdate: setTree,
                },
            })}
        </StoryDarkerContainer>
    );
};

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
