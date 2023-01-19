import { FC } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import styled from '@emotion/styled';
import {
    Checkbox,
    PALETTE_COLORS,
    QX_SIZE,
    RadioButton,
    SelectionControllerProps,
    Switcher,
    useBooleanState,
    Values,
    valuesAsKeysFromArray,
    Selection,
    SelectionProps,
    SELECTION_TYPE,
} from '@core';
import { StoryDarkerContainer } from '@core/src/main/Selections/stories/StoryDarkerContainer';
import { FourSquaresIcon } from '@quarx-ui/icons/src/four-squares/24px/stroke/rounded';
import { BookOpenIcon } from '@quarx-ui/icons/src/book-open/24px/stroke/rounded';
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { Div } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

const Padding = styled.div` margin: 0 6px; `;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const CONTROLLER_OPTIONS = valuesAsKeysFromArray([
    'Checkbox',
    'RadioButton',
    'Switcher',
]);

const CONTROLLERS: Record<
Values<typeof CONTROLLER_OPTIONS>,
& FC<SelectionControllerProps>
& { checked?: boolean }
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
& any
> = {
    Checkbox,
    RadioButton,
    Switcher,
};

interface SelectionTemplateProps extends Omit<Partial<SelectionProps>, 'children'> {
    children: Values<typeof CONTROLLER_OPTIONS>;
}

const defaultArgs: SelectionTemplateProps = {
    children: CONTROLLER_OPTIONS.Checkbox,
    title: 'Title',
    description: 'Description text',
    helperText: 'helper text',
};

const DESCRIPTION_MD = `
Компонент Selection принимает в себя контроллер, который управляет
состоянием активации всего компонента. Selection берет на себя
управление следующими состояниями:
* hover
* disableFocus
Это необходимо для корректного отображения состояний компонента.

Компонент реализует синхронизацию следующих одинаковых свойств:
* size
* color
* disabled

Синхронизация реализуется по принципам, описанным в 
[manuals/Перезапись свойств дочернего компонента](../?path=/docs/core-manuals--overwriting-properties)
`;

export default {
    title: STORY_PATHS.core.components.main('Selections/Selection'),
    component: Selection,
    argTypes: {
        onChange: { description: 'Обработчик изменения состояния контроллера' },
        children: {
            description: 'Контроллер состояния',
            options: Object.values(CONTROLLER_OPTIONS),
        },
        title: { description: 'Заголовок компонента' },
        description: { description: 'Текст описания' },
        helperText: { description: 'Вспомогательный текст' },
        leftAdornment: { description: 'Левый элемент' },
        rightAdornment: { description: 'Правый элемент' },
        disableHandlingChildProps: {
            description: [
                'Отключение управления дочерними свойствами.',
                'Значениями свойств onChange, disableFocus, hover',
                'управляет Selection. Данное свойство отключит',
                'контроль дочерних свойств.',
            ].join(' '),
        },

        type: { description: 'Тип компонента' },
        color: { description: 'Цветовая схема компонента ' },
        size: { description: 'Размер компонента' },
        disabled: { description: 'Активное/неактивное состоние компонента' },
        reverse: { description: 'Включить/Отключить обратный порядок элементов' },
        disableFocus: { description: 'Возможность отключения focus`а компонента' },
        hover: { description: 'Начальное состояние эффекта наведения' },

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
        docs: {
            page: () => (
                <Div>
                    <Title />
                    <Description markdown={DESCRIPTION_MD} />
                    <Primary />
                    <Subtitle>Описание пропсов</Subtitle>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories title="Примеры использования" />
                </Div>
            ),
        },
    },
    args: defaultArgs,
};

const Template: Story<SelectionTemplateProps> = ({
    children,
    ...props
}) => {
    const { state, setOppositeState } = useBooleanState(false);
    const ControllerComponent = CONTROLLERS[children ?? CONTROLLER_OPTIONS.Checkbox];

    return (
        <StoryDarkerContainer>
            <Selection
                {...props}
            >
                <ControllerComponent
                    checked={state}
                    onChange={setOppositeState}
                    borderRadius="max"
                />
            </Selection>
        </StoryDarkerContainer>
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';
Sandbox.args = defaultArgs;

export const Types: Story<SelectionTemplateProps> = (externalProps) => (
    <StoryDarkerContainer>
        {DisplayVariants<SelectionTemplateProps>({
            property: 'type',
            values: Object.values(SELECTION_TYPE),
            componentProps: externalProps,
            component: Template,
        })}
    </StoryDarkerContainer>
);

Types.storyName = 'Типы';
Types.args = defaultArgs;
Types.argTypes = excludeProp(['type']);

const adornmentsDisplayProps = {
    property: 'reverse',
    title: { isShown: false },
    values: [false, true],
    component: Template,
};
export const Adornment: Story<SelectionTemplateProps> = (externalProps) => (
    <StoryDarkerContainer>
        {DisplayVariants<SelectionTemplateProps>({
            ...adornmentsDisplayProps,
            componentProps: {
                ...externalProps,
                leftAdornment: (
                    <Padding>
                        <FourSquaresIcon />
                    </Padding>
                ),
            },
        })}
        {DisplayVariants<SelectionTemplateProps>({
            ...adornmentsDisplayProps,
            componentProps: {
                ...externalProps,
                rightAdornment: (
                    <Padding>
                        <FourSquaresIcon />
                    </Padding>
                ),
            },
        })}
        {DisplayVariants<SelectionTemplateProps>({
            ...adornmentsDisplayProps,
            componentProps: {
                ...externalProps,
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

Adornment.storyName = 'Украшения';
Adornment.args = defaultArgs;
Adornment.argTypes = excludeProp(['leftAdornment', 'rightAdornment']);

export const Colors: Story<SelectionTemplateProps> = (externalProps) => (
    <StoryDarkerContainer>
        {DisplayVariants<SelectionTemplateProps>({
            property: 'color',
            values: Object.values(PALETTE_COLORS),
            componentProps: externalProps,
            component: Template,
        })}
    </StoryDarkerContainer>
);

Colors.storyName = 'Цвета';
Colors.args = defaultArgs;
Colors.argTypes = excludeProp(['color']);

export const Sizes: Story<SelectionTemplateProps> = (externalProps) => (
    <StoryDarkerContainer>
        <Flex>
            {DisplayVariants<SelectionTemplateProps>({
                property: 'size',
                values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
                componentProps: externalProps,
                component: Template,
            })}
        </Flex>
    </StoryDarkerContainer>
);

Sizes.storyName = 'Размеры';
Sizes.args = defaultArgs;
Sizes.argTypes = excludeProp(['size']);

const Booleans = ['reverse', 'disabled', 'disableFocus', 'hover'];
export const BooleanParams: Story<SelectionTemplateProps> = (externalProps) => (
    <StoryDarkerContainer>
        <Flex>
            {Booleans.map((property) => (
                <Flex key={property}>
                    <span>{property}</span>
                    {DisplayVariants<SelectionTemplateProps>({
                        title: { isShown: false },
                        property,
                        values: [false, true],
                        componentProps: {
                            ...externalProps,
                            type: SELECTION_TYPE.contained,
                        },
                        component: Template,
                    })}
                </Flex>
            ))}
        </Flex>
    </StoryDarkerContainer>
);

BooleanParams.storyName = 'Boolean параметры';
BooleanParams.args = defaultArgs;
BooleanParams.argTypes = excludeProp(Booleans);
