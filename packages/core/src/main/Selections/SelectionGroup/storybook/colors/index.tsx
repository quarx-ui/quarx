import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { PALETTE_COLORS } from '@core/styles';
import { excludeProp } from '@core/storybook/templateParams';
import { SelectionGroup } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { TemplateSelectionGroupProps, getTemplateChildren, useTemplateChildren } from '../utils';

export const ColorsStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'color',
                containerAlign: 'flex-start',
                values: Object.values(PALETTE_COLORS),
                component: SelectionGroup,
                componentProps: {
                    ...props,
                    color: PALETTE_COLORS.brand,
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

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
