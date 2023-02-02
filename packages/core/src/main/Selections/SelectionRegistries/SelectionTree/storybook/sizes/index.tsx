import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { QX_SIZE, SelectionTree, SelectionTreeProps } from '@core';

export const SizesStory: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'size',
                containerAlign: 'flex-start',
                values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
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

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
