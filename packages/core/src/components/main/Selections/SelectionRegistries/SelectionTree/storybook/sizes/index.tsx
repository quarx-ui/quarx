import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Row, Column, Title, StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { QX_SIZE, SelectionTree, SelectionTreeProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const sizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];

export const SizesStory: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            <Row>
                {sizes.map((value) => (
                    <Column key={value}>
                        <Title>
                            {value}
                        </Title>
                        <SelectionTree
                            {...props}
                            size={value}
                            nodes={selectionTree}
                            onUpdate={setTree}
                        />
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
