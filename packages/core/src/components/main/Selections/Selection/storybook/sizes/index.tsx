import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { QX_SIZE, Selection, SelectionProps, useBooleanState } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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
    const [state, { toggleState }] = useBooleanState(false);
    const children = getController({
        checked: state,
        onChange: toggleState,
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

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
