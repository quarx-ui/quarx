import { Story } from '@storybook/react/types-6-0';
import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { PALETTE_COLORS } from '@core/styles';
import { excludeProp } from '@core/storybook/templateParams';
import { SelectionGroup } from '@core';
import { TemplateSelectionGroupProps, getTemplateChildren, useTemplateChildren } from '../utils';

export const ColorsStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            <Row>
                {Object.values(PALETTE_COLORS).map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionGroup {...props} color={value}>
                            {getTemplateChildren({ nodes, setNodes, ...props })}
                        </SelectionGroup>
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
