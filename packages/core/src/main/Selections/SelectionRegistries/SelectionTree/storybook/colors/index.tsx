import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { PALETTE_COLORS, SelectionTree, SelectionTreeProps } from '@core';

export const ColorsStory: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'color',
                containerAlign: 'flex-start',
                values: Object.values(PALETTE_COLORS),
                component: SelectionTree,
                componentProps: {
                    ...props,
                    nodes: selectionTree,
                    onUpdate: setTree,
                },
            })}
        </StoryDarkerContainer>
    );
};

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
