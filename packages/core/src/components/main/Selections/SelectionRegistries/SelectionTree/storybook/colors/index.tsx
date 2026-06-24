import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Row, Column, Title, StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { PALETTE_COLORS, SelectionTree, SelectionTreeProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ColorsStory: StoryFn<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            <Row>
                {Object.values(PALETTE_COLORS).map((value) => (
                    <Column key={value}>
                        <Title>
                            {value}
                        </Title>
                        <SelectionTree
                            {...props}
                            color={value}
                            nodes={selectionTree}
                            onUpdate={setTree}
                        />
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

setStoryParams(ColorsStory, {
    title: 'Цвета',
    excludeArgs: ['color'],
});
