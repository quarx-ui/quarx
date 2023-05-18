import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { SelectionListProps, SELECTION_GROUP_TYPE, SelectionList } from '@core';

export const TypesStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            <Row>
                {Object.values(SELECTION_GROUP_TYPE).map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionList
                            {...props}
                            type={value}
                            nodes={selectionList}
                            onUpdate={setList}
                        />
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
