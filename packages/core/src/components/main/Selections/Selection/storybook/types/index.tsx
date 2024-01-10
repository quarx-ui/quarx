import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { useBooleanState, Selection, SelectionProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { SELECTION_TYPE } from '../../styles/constants';
import { SelectionTemplateProps, CONTROLLER_OPTIONS, getController } from '../utils';

export const TypesStory: Story<SelectionTemplateProps> = ({
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
                property: 'type',
                values: Object.values(SELECTION_TYPE),
                component: Selection,
                componentProps: { children, ...externalProps },
            })}
        </StoryDarkerContainer>
    );
};

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
