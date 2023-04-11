import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { SelectionGroup } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { SELECTION_GROUP_TYPE } from '../../styles/constants';
import { TemplateSelectionGroupProps, useTemplateChildren, getTemplateChildren } from '../utils';

export const TypesStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            {DisplayVariants({
                property: 'type',
                containerAlign: 'flex-start',
                values: [SELECTION_GROUP_TYPE.contained, SELECTION_GROUP_TYPE.text],
                component: SelectionGroup,
                componentProps: {
                    ...props,
                    children: getTemplateChildren({ nodes, setNodes, ...props }),
                },
            })}
        </StoryDarkerContainer>
    );
};

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
