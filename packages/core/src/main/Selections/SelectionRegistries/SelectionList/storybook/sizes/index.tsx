import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { SelectionListProps, QX_SIZE, SelectionList } from '@core';

export const SizesStory: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);
    useEffect(() => setList(nodes), [nodes]);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'size',
                containerAlign: 'flex-start',
                values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
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

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
