import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, SelectionTree, SelectionTreeProps } from '@core';

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

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
