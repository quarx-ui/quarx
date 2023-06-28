import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { PALETTE_COLORS, SelectionTree, SelectionTreeProps } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const ColorsStory: Story<SelectionTreeProps> = ({
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
