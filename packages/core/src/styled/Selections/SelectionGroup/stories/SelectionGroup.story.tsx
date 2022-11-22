/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { darken, makeStyles, PALETTE_COLORS, SELECTION_GROUP_TYPE } from '@core';
import { SelectionGroup, SelectionGroupProps } from '..';

const useCustomContainerStyles = makeStyles(({ palette }) => ({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: darken(palette.background.container.hover, 10),
        overflowY: 'auto',
    },
}));

const CustomContainer: React.FC = ({
    children,
}) => {
    const styles = useCustomContainerStyles();
    return (
        <div css={styles.root}>
            {children}
        </div>
    );
};

const defaultArgs: Partial<SelectionGroupProps> = {
    title: 'Группа',
    description: 'Выберите вариант',
    helperText: 'Выберите вариант ответа',
};

export default {
    title: 'core/components/main/Selections/SelectionGroup',
    component: SelectionGroup,
    argTypes: {
        title: { description: 'Заголовок компонента' },
        description: { description: 'Описание компонента' },
        helperText: { description: 'Вспомогательный текст компонента' },
        type: { description: 'Тип заливки компонента' },
        color: { description: 'Цветовая схема компонента' },
        size: { description: 'Размер компонента' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<SelectionGroupProps> = ({
    children,
    ...props
}) => (
    <CustomContainer>
        <SelectionGroup {...props}>
            {children}
        </SelectionGroup>
    </CustomContainer>
);

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

export const Types: Story<SelectionGroupProps> = (props) => (
    <CustomContainer>
        {DisplayVariants({
            property: 'type',
            values: Object.values(SELECTION_GROUP_TYPE),
            component: Template,
            componentProps: props,
        })}
    </CustomContainer>
);

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);

export const Colors: Story<SelectionGroupProps> = (props) => (
    <CustomContainer>
        {DisplayVariants({
            property: 'color',
            values: Object.values(PALETTE_COLORS),
            component: Template,
            componentProps: props,
        })}
    </CustomContainer>
);

Colors.storyName = 'Цвета';
Colors.argTypes = excludeProp(['color']);

export const Sizes: Story<SelectionGroupProps> = (props) => (
    <CustomContainer>
        {DisplayVariants({
            property: 'size',
            values: Object.values(PALETTE_COLORS),
            component: Template,
            componentProps: props,
        })}
    </CustomContainer>
);

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);

const variantsArray = [
    Types,
    Colors,
    Sizes,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
