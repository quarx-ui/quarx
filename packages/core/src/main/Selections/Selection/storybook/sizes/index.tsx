import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { QX_SIZE, Selection, SelectionProps, useBooleanState } from '@core';
import {
    Flex,
    SelectionTemplateProps,
    CONTROLLER_OPTIONS,
    getController,
} from '../utils';

export const SizesStory: Story<SelectionTemplateProps> = ({
    children: externalChildren,
    ...externalProps
}) => {
    const { state, setOppositeState } = useBooleanState(false);
    const children = getController({
        checked: state,
        onChange: setOppositeState,
        variant: externalChildren ?? CONTROLLER_OPTIONS.Checkbox,
    });

    return (
        <StoryDarkerContainer>
            <Flex>
                {DisplayVariants<SelectionProps>({
                    property: 'size',
                    values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
                    component: Selection,
                    componentProps: { children, ...externalProps },
                })}
            </Flex>
        </StoryDarkerContainer>
    );
};

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
