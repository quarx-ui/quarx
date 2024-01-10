import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Row, Column, Title, StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { SelectionListProps, QX_SIZE, SelectionList } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const sizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];

export const SizesStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            <Row>
                {sizes.map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionList
                            {...props}
                            size={value}
                            nodes={selectionList}
                            onUpdate={setList}
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
