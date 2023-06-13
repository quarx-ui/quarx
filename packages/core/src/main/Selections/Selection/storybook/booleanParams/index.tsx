import { Story } from '@storybook/react/types-6-0';
import styled from '@emotion/styled';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Selection, SelectionProps, useBooleanState, SELECTION_TYPE } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { CONTROLLER_OPTIONS, Flex, getController, Padding, SelectionTemplateProps } from '../utils';

const SPAN = styled('span')({
    margin: 12,
});

const Booleans: Array<keyof SelectionProps> = ['reverse', 'disabled', 'disableFocus', 'hover'];
export const BooleanParamsStory: Story<SelectionTemplateProps> = ({
    children: externalChildren,
    ...externalProps
}) => {
    const [state, { toggleState }] = useBooleanState(false);
    return (
        <StoryDarkerContainer>
            <Flex>
                {Booleans.map((property) => (
                    <Padding key={property}>
                        <Flex key={property}>
                            <SPAN>{property}</SPAN>
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
                                        onChange: toggleState,
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

setStoryParams(BooleanParamsStory, {
    title: 'Boolean параметры',
    excludeArgs: Booleans,
});
