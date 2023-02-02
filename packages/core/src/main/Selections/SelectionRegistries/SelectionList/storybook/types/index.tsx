import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { SelectionListProps, SELECTION_GROUP_TYPE, SelectionList } from '@core';

export const TypesStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'type',
                containerAlign: 'flex-start',
                values: Object.values(SELECTION_GROUP_TYPE),
                component: SelectionList,
                componentProps: {
                    ...props,
                    nodes: selectionList,
                    onUpdate: setList,
                },
            })}
        </StoryDarkerContainer>
    );
};

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
