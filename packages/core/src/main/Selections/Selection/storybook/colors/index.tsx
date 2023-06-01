import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Story } from '@storybook/react/types-6-0';
import { PALETTE_COLORS, Selection, SelectionProps, useBooleanState } from '@core';
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

ColorsStory.storyName = 'Цвета';
ColorsStory.argTypes = excludeProp(['color']);
