import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Button } from '@core';
import { Stack, StackProps } from '..';
import { STACK_DIRECTION, STACK_ORDER } from '../styles/constants';

const defaultArgs: Partial<StackProps> = {
    spacing: '8px',
    direction: 'column',
    order: 'forward',
    inline: false,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    children: [
        <Button borderRadius="small" type="outlined">
            Отправить
        </Button>,
        <Button borderRadius="small" type="outlined" color="secondary">
            Редактировать
        </Button>,
        <Button borderRadius="small" type="outlined" color="danger">
            Удалить
        </Button>,
    ],
};

export default {
    title: STORY_PATHS.core.components.system('Stack'),
    component: Stack,
    argTypes: {
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
        children: {
            control: false,
        },
        ...defineCategory('Выравнивание', {
            justifyContent: {
                control: { type: 'select' },
            },
            alignItems: {
                control: { type: 'select' },
            },
        }),
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<StackProps> = ({ ...props }) => (
    <Stack {...props} />
);

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

export const Directions: Story<StackProps> = (props) => DisplayVariants({
    property: 'direction',
    values: Object.values(STACK_DIRECTION).reverse(),
    component: Stack,
    componentProps: props,
});

Directions.storyName = 'Направление';
Directions.argTypes = excludeProp(['direction']);

export const Orders: Story<StackProps> = (props) => DisplayVariants({
    property: 'order',
    values: Object.values(STACK_ORDER),
    component: Stack,
    componentProps: props,
});

Orders.storyName = 'Порядок элементов';
Orders.argTypes = excludeProp(['order']);

const variantsArray = [
    Directions,
    Orders,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});

export const WithDivider: Story<StackProps> = (props) => (
    <Stack {...props} direction="row" divider={<div>•</div>}>
        <div>Главная</div>
        <div>Профиль</div>
        <div>Настройки</div>
    </Stack>
);

WithDivider.storyName = 'Разделитель';
WithDivider.argTypes = excludeProp(['divider']);
