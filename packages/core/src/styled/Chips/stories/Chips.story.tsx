import React, { ReactElement } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import {
    ChipsPropsWithoutHtml,
    ChipsSize,
    QX_SIZE,
} from '@core';
import styled from '@emotion/styled';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import { DocumentIcon } from '@quarx-ui/icons/src/document/24px/stroke/rounded';
import { TrashBinIcon } from '@quarx-ui/icons/src/trash-bin/24px/stroke/rounded';
import { EnvelopeIcon as EnvelopeIconSmallSize } from '@quarx-ui/icons/src/envelope/16px/stroke/rounded';
import { EnvelopeIcon as EnvelopeIconMediumSize } from '@quarx-ui/icons/src/envelope/24px/stroke/rounded';
import { CheckmarkCircleIcon } from '@quarx-ui/icons/src/checkmark-circle/24px/fill/rounded';
import { CHIPS_VARIANT } from '../constants';
import { Chips, ChipsProps, ChipsVariant } from '../index';

const EnvelopeIcon: Record<ChipsSize, ReactElement> = {
    small: <EnvelopeIconSmallSize />,
    medium: <EnvelopeIconMediumSize />,
};

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 22,
});

const ColumnFlex = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
});

const defaultArgs: Omit<
Required<ChipsPropsWithoutHtml>,
'ref'
| 'className'
| 'classes'
| 'styles'
| 'permissions'
| 'activeStateIcon'
| 'animationDuration'
> = {
    variant: CHIPS_VARIANT.input,
    children: 'chips',
    active: false,
    disabled: false,
    elevation: false,
    size: QX_SIZE.medium,
    disableFocus: false,
    leftIcon: <EnvelopeIconMediumSize />,
    leftIconColor: '#21A038',
    rightIcon: true,
    hidden: false,
    rotateRightIcon: true,
    cssVars: {},
};

export default {
    title: 'core/Chips',
    component: Chips,
    argTypes: {
        size: { description: 'Размер chips' },
        variant: { description: 'Вариант Chips' },
        elevation: { description: 'Использование стилей с тенями' },
        active: { description: 'Активное состояние' },
        disabled: { description: 'Выключенное состояние' },
        disableFocus: { description: 'Отключение фокусировки' },
        leftIcon: { description: 'Левая иконка' },
        leftIconColor: { description: 'Цвет левой иконки' },
        rotateRightIcon: {
            description: [
                'Переворачивать картинку на 180 ',
                'градусов при состоянии active',
            ].join(''),
        },
        rightIcon: {
            description: [
                'Правая иконка. Варианты использования:',
                '- false, undefined: иконка отсутствует;',
                '- true: стандартная иконка;',
                '- ReactElement: кастоная иконка.',
                '',
                'Стандартные иконки:',
                '- \'input\' chips: CrossIcon',
                '- \'filter\' chips: ChevronDownIcon',
            ].join('\n'),
        },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: defaultArgs,
    parameters: {
        actions: { disable: true },
        design: designParams('https://www.figma.com/file/i6CnJSetih3Jnw9RtIOnNP/Controls?node-id=3997%3A74969'),
    },
};

const Template: React.FC<ChipsProps> = ({ size, ...props }) => (
    <Chips
        {...props}
        size={size}
        leftIcon={EnvelopeIcon[size ?? defaultArgs.size]}
    />
);

export const Sandbox: Story<ChipsProps> = (props) => (
    <Template {...props} />
);
Sandbox.storyName = 'Компонент';

const VARIANTS: ChipsVariant[] = Object.values(CHIPS_VARIANT);
export const Variants: Story = (props) => DisplayVariants({
    property: 'variant',
    values: VARIANTS,
    component: Template,
    componentProps: props,
});
Variants.storyName = 'Варианты';
Variants.argTypes = excludeProp(['variant']);

const SIZES: ChipsSize[] = [QX_SIZE.small, QX_SIZE.medium];
export const Sizes: Story = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Template,
    componentProps: props,
});
Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);

const ELEVATIONS: boolean[] = [true, false];
export const Elevations: Story = (props) => DisplayVariants({
    property: 'elevation',
    values: ELEVATIONS,
    component: Template,
    componentProps: props,
});
Elevations.storyName = 'Тени';
Elevations.argTypes = excludeProp(['elevation']);

const ACTIVE_VARIANTS: boolean[] = [false, true];
const DISABLED_VARIANTS: boolean[] = [true];
export const BooleanParams: Story = (props) => (
    <ColumnFlex>
        <ColumnFlex>
            <Title size="primary">Active</Title>
            <Flex>
                <ColumnFlex>
                    <Title>Elevation off</Title>
                    {DisplayVariants({
                        property: 'active',
                        values: ACTIVE_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: { ...props, elevation: false },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Elevation</Title>
                    {DisplayVariants({
                        property: 'active',
                        values: ACTIVE_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: { ...props, elevation: true },
                    })}
                </ColumnFlex>
            </Flex>
        </ColumnFlex>
        <br />
        <ColumnFlex>
            <Title size="primary">Disabled</Title>
            <Flex>
                <ColumnFlex>
                    <Title>Inactive & Elevation off</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: {
                            ...props,
                            active: false,
                            elevation: false,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Active & Elevation off</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: {
                            ...props,
                            active: true,
                            elevation: false,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Inactive & Elevation</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: {
                            ...props,
                            active: false,
                            elevation: true,
                        },
                    })}
                </ColumnFlex>
                <ColumnFlex>
                    <Title>Active & Elevation</Title>
                    {DisplayVariants({
                        property: 'disabled',
                        values: DISABLED_VARIANTS,
                        direction: 'vertical',
                        title: { isShown: false },
                        component: Template,
                        componentProps: {
                            ...props,
                            active: true,
                            elevation: true,
                        },
                    })}
                </ColumnFlex>
            </Flex>
        </ColumnFlex>
    </ColumnFlex>
);
BooleanParams.storyName = 'Boolean параметры';
BooleanParams.argTypes = excludeProp(['disabled', 'active', 'elevation']);

export const Icons: Story = (props) => (
    <Flex>
        <ColumnFlex>
            <Title size="primary">Default icons</Title>
            {DisplayVariants({
                property: 'variant',
                values: Object.values(CHIPS_VARIANT),
                title: { isShown: true, size: 'secondary', type: 'value' },
                component: Chips,
                componentProps: {
                    ...props,
                    size: QX_SIZE.medium,
                    leftIcon: undefined,
                    rightIcon: true,
                },
            })}
        </ColumnFlex>
        <ColumnFlex>
            <Title size="primary">Custom icons</Title>
            {DisplayVariants({
                property: 'variant',
                values: Object.values(CHIPS_VARIANT),
                title: { isShown: true, size: 'secondary', type: 'value' },
                component: Chips,
                componentProps: {
                    ...props,
                    size: QX_SIZE.medium,
                    rotateRightIcon: false,
                    leftIcon: <DocumentIcon />,
                    rightIcon: <TrashBinIcon />,
                },
            })}
        </ColumnFlex>
        <ColumnFlex>
            <Title size="primary">
                Active state icon
            </Title>
            <Flex>
                <div>
                    <Title size="secondary">
                        active: false
                    </Title>
                    <Chips
                        {...props}
                        active={false}
                        activeStateIcon={<CheckmarkCircleIcon />}
                        elevation
                        leftIcon={undefined}
                    >
                        chips
                    </Chips>
                </div>
                <div>
                    <Title size="secondary">
                        active: true
                    </Title>
                    <Chips
                        {...props}
                        active
                        activeStateIcon={<CheckmarkCircleIcon />}
                        elevation
                        leftIcon={undefined}
                    >
                        chips
                    </Chips>
                </div>
            </Flex>
        </ColumnFlex>
    </Flex>
);
Icons.storyName = 'Иконки';
Icons.argTypes = excludeProp(['leftIcon', 'rightIcon', 'size', 'variant', 'rotateRightIcon']);

const storiesArray = [
    Variants,
    Sizes,
    Elevations,
    BooleanParams,
    Icons,
];

storiesArray.forEach((variant, index) => {
    storiesArray[index].args = defaultArgs;
});
