import { Row, Column, Title, StoryDarkerContainer } from '@core/storybook/components';
import { Story } from '@storybook/react/types-6-0';
import { QX_SIZE } from '@core/enums';
import { SelectionGroup } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { getTemplateChildren, TemplateSelectionGroupProps, useTemplateChildren } from '../utils';

const sizes = [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large];
export const SizesStory: Story<TemplateSelectionGroupProps> = (props) => {
    const { nodes, setNodes } = useTemplateChildren(props);

    return (
        <StoryDarkerContainer>
            <Row>
                {sizes.map((value) => (
                    <Column key={value}>
                        <Title>{value}</Title>
                        <SelectionGroup {...props} size={value}>
                            {getTemplateChildren({ nodes, setNodes, ...props })}
                        </SelectionGroup>
                    </Column>
                ))}
            </Row>
        </StoryDarkerContainer>
    );
};

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
