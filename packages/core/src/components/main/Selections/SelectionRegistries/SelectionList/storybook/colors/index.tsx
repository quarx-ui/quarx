import { useEffect, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Row, Column, Title, StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { PALETTE_COLORS, SelectionList, SelectionListProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ColorsStory: StoryFn<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes ?? []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            <Row>
                {Object.values(PALETTE_COLORS).map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionList
                            {...props}
                            color={value}
                            nodes={selectionList}
                            onUpdate={setList}
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
