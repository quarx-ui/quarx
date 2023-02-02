import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { P } from '@storybook/components';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Selection, SelectionProps, useBooleanState, SELECTION_TYPE } from '@core';
import { CONTROLLER_OPTIONS, Flex, getController, Padding, SelectionTemplateProps } from '../utils';

const Booleans = ['reverse', 'disabled', 'disableFocus', 'hover'];
export const BooleanParamsStory: Story<SelectionTemplateProps> = ({
    children: externalChildren,
    ...externalProps
}) => {
    const { state, setOppositeState } = useBooleanState(false);
    return (
        <StoryDarkerContainer>
            <Flex>
                {Booleans.map((property) => (
                    <Padding>
                        <Flex key={property}>
                            <P>{property}</P>
                            {DisplayVariants<SelectionProps>({
                                title: { isShown: false },
                                property,
                                values: [false, true],
                                component: Selection,
                                componentProps: {
                                    ...externalProps,
                                    type: SELECTION_TYPE.contained,
                                    children: getController({
                                        checked: state,
                                        onChange: setOppositeState,
                                        variant: externalChildren ?? CONTROLLER_OPTIONS.Checkbox,
                                    }),
                                },
                            })}
                        </Flex>
                    </Padding>
                ))}
            </Flex>
        </StoryDarkerContainer>
    );
};

BooleanParamsStory.storyName = 'Boolean параметры';
BooleanParamsStory.argTypes = excludeProp(Booleans);
