import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@core/storybook/templateParams';
import { ChipsProps, ChipsPropsWithoutHtml, QX_SIZE } from '@core';
import { EnvelopeIcon as EnvelopeIconMediumSize } from '@quarx-ui/icons/src/envelope/24px/stroke/rounded';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
import { Chips } from '../index';
import { CHIPS_VARIANT } from '../constants';

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
};

export default {
    title: STORY_PATHS.core.components.main('Chips'),
    component: Chips,
    args: defaultArgs,
    argTypes: {
        size: { description: 'Размер chips' },
        variant: { description: 'Вариант Chips' },
        elevation: { description: 'Использование стилей с тенями' },
        active: { description: 'Активное состояние' },
        disabled: { description: 'Выключенное состояние' },
        disableFocus: { description: 'Отключение фокусировки' },
        leftIcon: { description: 'Левая иконка' },
        leftIconColor: { description: 'Цвет левой иконки' },
        activeStateIcon: {
            type: 'boolean',
            control: {
                options: [true, false],
            },
        },
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
} as Meta<ChipsProps>;

export { SandboxStory } from './sandbox';
export { BooleanParamsStory } from './booleans';
export { ElevationsStory } from './elevations';
export { IconsStory } from './icons';
export { VariantsStory } from './variants';
export { SizesStory } from './sizes';
