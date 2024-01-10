import { Story } from '@storybook/react/types-6-0';
import { HR } from '@storybook/components';
import { FourSquaresIcon } from '@quarx-ui/icons/src/four-squares/24px/stroke/rounded';
import { BookOpenIcon } from '@quarx-ui/icons/src/book-open/24px/stroke/rounded';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { useBooleanState, Selection, SelectionProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { DisplayVariantsProps } from '@quarx-ui/core/storybook/DisplayVariants/DisplayVariants';
import { CONTROLLER_OPTIONS, getController, Padding, SelectionTemplateProps } from '../utils';

const adornmentsDisplayProps: DisplayVariantsProps<SelectionProps> = {
    property: 'reverse',
    title: { isShown: false },
    values: [false, true],
    component: Selection,
};
export const AdornmentStory: Story<SelectionTemplateProps> = ({
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
                ...adornmentsDisplayProps,
                containerJustify: 'space-evenly',
                componentProps: {
                    ...externalProps,
                    children,
                    leftAdornment: (
                        <Padding>
                            <FourSquaresIcon />
                        </Padding>
                    ),
                },
            })}
            <HR />
            {DisplayVariants<SelectionProps>({
                ...adornmentsDisplayProps,
                containerJustify: 'space-evenly',
                componentProps: {
                    ...externalProps,
                    children,
                    rightAdornment: (
                        <Padding>
                            <FourSquaresIcon />
                        </Padding>
                    ),
                },
            })}
            <HR />
            {DisplayVariants<SelectionProps>({
                ...adornmentsDisplayProps,
                containerJustify: 'space-evenly',
                componentProps: {
                    ...externalProps,
                    children,
                    leftAdornment: (
                        <Padding>
                            <FourSquaresIcon />
                        </Padding>
                    ),
                    rightAdornment: (
                        <Padding>
                            <BookOpenIcon />
                        </Padding>
                    ),
                },
            })}
        </StoryDarkerContainer>
    );
};

setStoryParams(AdornmentStory, {
    title: 'Украшения',
    excludeArgs: ['leftAdornment', 'rightAdornment'],
});
