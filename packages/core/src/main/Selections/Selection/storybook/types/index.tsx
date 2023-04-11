import { excludeProp } from '@core/storybook/templateParams';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@core/storybook/components';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { useBooleanState, Selection, SelectionProps } from '@core';
import { SELECTION_TYPE } from '../../styles/constants';
import { SelectionTemplateProps, CONTROLLER_OPTIONS, getController } from '../utils';

export const TypesStory: Story<SelectionTemplateProps> = ({
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
            {DisplayVariants<SelectionProps>({
                property: 'type',
                values: Object.values(SELECTION_TYPE),
                component: Selection,
                componentProps: { children, ...externalProps },
            })}
        </StoryDarkerContainer>
    );
};

TypesStory.storyName = 'Типы';
TypesStory.argTypes = excludeProp(['type']);
