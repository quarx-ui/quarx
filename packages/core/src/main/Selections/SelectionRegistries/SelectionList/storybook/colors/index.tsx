import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { PALETTE_COLORS, SelectionList, SelectionListProps } from '@core';

export const ColorsStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'color',
                containerAlign: 'flex-start',
                values: Object.values(PALETTE_COLORS),
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

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
