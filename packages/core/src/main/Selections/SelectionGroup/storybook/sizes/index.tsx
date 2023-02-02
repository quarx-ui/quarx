import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { SelectionGroup } from '@core';
import { getTemplateChildren, TemplateSelectionGroupProps, useTemplateChildren } from '../utils';

export const SizesStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'size',
                containerAlign: 'flex-start',
                values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
                component: SelectionGroup,
                componentProps: {
                    ...props,
                    children: getTemplateChildren({
                        nodes,
                        setNodes,
                        ...props,
                    }),
                },
            })}
        </StoryDarkerContainer>
    );
};

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
