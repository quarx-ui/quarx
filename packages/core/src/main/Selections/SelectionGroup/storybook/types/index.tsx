import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { SelectionGroup } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { SELECTION_GROUP_TYPE } from '../../styles/constants';
import { TemplateSelectionGroupProps, useTemplateChildren, getTemplateChildren } from '../utils';

const types = [SELECTION_GROUP_TYPE.contained, SELECTION_GROUP_TYPE.text];

export const TypesStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            <Row>
                {types.map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionGroup {...props} type={value}>
                            {getTemplateChildren({ nodes, setNodes, ...props })}
                        </SelectionGroup>
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
