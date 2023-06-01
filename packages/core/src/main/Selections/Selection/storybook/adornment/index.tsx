import { Story } from '@storybook/react/types-6-0';
import { HR } from '@storybook/components';
import { FourSquaresIcon } from '@quarx-ui/icons/src/four-squares/24px/stroke/rounded';
import { BookOpenIcon } from '@quarx-ui/icons/src/book-open/24px/stroke/rounded';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { StoryDarkerContainer } from '@core/storybook/components';
import { useBooleanState, Selection, SelectionProps } from '@core';
import { CONTROLLER_OPTIONS, getController, Padding, SelectionTemplateProps } from '../utils';

const adornmentsDisplayProps = {
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

AdornmentStory.storyName = 'Украшения';
AdornmentStory.argTypes = excludeProp(['leftAdornment', 'rightAdornment']);
