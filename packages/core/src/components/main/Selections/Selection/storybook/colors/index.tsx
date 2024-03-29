import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { Story } from '@storybook/react/types-6-0';
import { PALETTE_COLORS, Selection, SelectionProps, useBooleanState } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { CONTROLLER_OPTIONS, getController, SelectionTemplateProps } from '../utils';

export const ColorsStory: Story<SelectionTemplateProps> = ({
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
            {DisplayVariants<SelectionProps>({
                property: 'color',
                values: Object.values(PALETTE_COLORS),
                component: Selection,
                componentProps: {
                    children,
                    ...externalProps,
                },
            })}
        </StoryDarkerContainer>
    );
};

setStoryParams(ColorsStory, {
    title: 'Цвета',
    excludeArgs: ['color'],
});
