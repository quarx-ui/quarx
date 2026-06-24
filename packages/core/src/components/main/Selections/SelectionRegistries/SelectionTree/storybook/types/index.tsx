import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Row, Column, Title, StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { SelectionTree, SelectionTreeProps, SELECTION_GROUP_TYPE } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const TypesStory: StoryFn<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            <Row>
                {Object.values(SELECTION_GROUP_TYPE).map((value) => (
                    <Column key={value}>
                        <Title>
                            {value}
                        </Title>
                        <SelectionTree
                            {...props}
                            type={value}
                            nodes={selectionTree}
                            onUpdate={setTree}
                        />
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
