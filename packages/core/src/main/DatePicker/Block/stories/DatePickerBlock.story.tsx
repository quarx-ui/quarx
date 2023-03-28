/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants/STORYBOOK_VIEWPORTS';
import { addDays } from 'date-fns';
import { getDateFnsLocale, PeriodSelectedDates, PickerSelectedDate } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { DatePickerBlock,
    DATE_PICKER_DISPLAY_TYPES,
    DATE_PICKER_TIME_TYPES,
    DatePickerProps,
} from '..';

type StoryType = Omit<DatePickerProps, 'onChange' | 'pickedDates'>;

const defaultArgs: StoryType = {
    type: DATE_PICKER_TIME_TYPES.PERIOD,
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChange: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.main('DatePicker/block'),
    component: DatePickerBlock,
    args: defaultArgs,
    argTypes: {
        component: {
            control: false,
            type: {
                required: false,
            },
        },
        ...defineCategory('Стилизация', {
            size: {
                control: { type: 'select' },
            },
            borderRadius: {
                control: { type: 'select' },
            },
        }),
        ...defineCategory('Функциональные параметры', {
            type: {
                control: { type: 'radio' },
            },
            display: {
                control: { type: 'radio' },
            },
            withTime: {
                control: { type: 'boolean' },
            },
        }),
        ...BASE_ARG_TYPES,
    },
    parameters: {
        actions: { disable: true },
        ...STORYBOOK_VIEWPORTS(),
    },
};

export const Sandbox: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodSelectedDates | undefined>(undefined);
    return (
        <React.Fragment>
            {pickedDates && Object.entries(pickedDates).map(([key, date]) => `Date ${key}: ${date.toString()}\n`)}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <DatePickerBlock
                selected={pickedDates}
                onChange={setPickedDates}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                type={DATE_PICKER_TIME_TYPES.PERIOD}
                {...props}
            />
        </React.Fragment>
    );
};

export const SizesAndDisplayTypes: Story<StoryType> = (props) => {
    const [selected, setSelected] = useState<PeriodSelectedDates | undefined>(undefined);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div>
                <h3 style={{ textAlign: 'center' }}>SINGLE</h3>
                {DisplayVariants({
                    property: 'size',
                    values: ['small', 'medium', 'large'],
                    component: DatePickerBlock,
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setSelected,
                        selected,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>DOUBLE</h3>
                {DisplayVariants({
                    property: 'size',
                    values: ['small', 'medium', 'large'],
                    component: DatePickerBlock,
                    componentProps: {
                        ...props,
                        display: DATE_PICKER_DISPLAY_TYPES.DOUBLE,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setSelected,
                        selected,
                    },
                })}
            </div>
        </div>
    );
};

export const BorderRadiusAndPickType: Story<StoryType> = (props) => {
    const [periodSelectedDates, setPeriodSelectedDates] = useState<PeriodSelectedDates | undefined>(undefined);
    const [selectedDate, setSelectedDate] = useState<PickerSelectedDate | undefined>(undefined);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div>
                <h3 style={{ textAlign: 'center' }}>PERIOD</h3>
                {DisplayVariants({
                    property: 'borderRadius',
                    values: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
                    component: DatePickerBlock,
                    direction: 'vertical',
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setPeriodSelectedDates,
                        selected: periodSelectedDates,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>PICKER</h3>
                {DisplayVariants({
                    property: 'borderRadius',
                    values: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
                    component: DatePickerBlock,
                    direction: 'vertical',
                    componentProps: ({
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PICKER,
                        onChange: setSelectedDate,
                        selected: selectedDate,
                    }),
                })}
            </div>
        </div>
    );
};

export const DisableYear: Story<StoryType> = (props) => {
    const [selected, setSelected] = useState<PeriodSelectedDates | undefined>(undefined);
    return (
        <div>
            {DisplayVariants({
                property: 'disableYearChange',
                values: [false, true],
                component: DatePickerBlock,
                componentProps: {
                    ...props,
                    type: DATE_PICKER_TIME_TYPES.PERIOD,
                    onChange: setSelected,
                    selected,
                },
            })}
        </div>
    );
};

export const AllowedDates: Story<StoryType> = (props) => {
    const [selected, setSelected] = useState<PickerSelectedDate | undefined>(undefined);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
        }}
        >
            <DatePickerBlock
                allowedDates={{
                    start: addDays(new Date(), -7),
                    end: addDays(new Date(), 7),
                }}
                {...props}
                type={DATE_PICKER_TIME_TYPES.PICKER}
                selected={selected}
                onChange={setSelected}
            />
            <DatePickerBlock
                allowedDates={{
                    start: addDays(new Date(), -7),
                }}
                {...props}
                selected={selected}
                onChange={setSelected}
                type={DATE_PICKER_TIME_TYPES.PICKER}
            />
            <DatePickerBlock
                allowedDates={{
                    end: addDays(new Date(), 7),
                }}
                {...props}
                selected={selected}
                onChange={setSelected}
                type={DATE_PICKER_TIME_TYPES.PICKER}
            />
        </div>
    );
};

export const FrenchDatePicker = (props: DatePickerProps) => {
    const [selected, setSelected] = useState<PeriodSelectedDates | undefined>();
    return (
        <DatePickerBlock
            {...props}
            selected={selected}
            onChange={setSelected}
            type={DATE_PICKER_TIME_TYPES.PERIOD}
            initialViewingDate={new Date('2022-09-07')}
            locale={getDateFnsLocale('fr')}
            texts={{
                startTime: 'Début',
                endTime: 'Fin',
                time: 'Temps',
            }}
        />
    );
};

Sandbox.storyName = 'Компонент';
SizesAndDisplayTypes.storyName = 'Размеры и типы отображения календаря';
BorderRadiusAndPickType.storyName = 'Радиусы и типы выбора дат';
DisableYear.storyName = 'Возможность изменения года';
AllowedDates.storyName = 'Возможность выбора даты только в доверенном периоде';
FrenchDatePicker.storyName = 'Возможность передачи locale из date-fns';
SizesAndDisplayTypes.parameters = {
    docs: {
        description: {
            story: 'Доступен выбор одного из трех размеров:<br/>'
                + '`small`, `medium`, `large`.',
        },
    },
};

BorderRadiusAndPickType.parameters = {
    docs: {
        description: {
            story: 'Доступен выбор любого из пердставленных в дизайн системе `BorderRadiusSize`:<br/>'
                + '`xSmall`, `small`, `medium`, `large`, `xLarge`.',
        },
    },
};
DisableYear.parameters = {
    docs: {
        description: {
            story: 'Доступно только на `SINGLE` версии календаря',
        },
    },
};
FrenchDatePicker.parameters = { docs: {
    description: {
        story: 'Пример на французском языке',
    },
} };
Sandbox.parameters = {
    ...STORYBOOK_VIEWPORTS(),
};
SizesAndDisplayTypes.argTypes = excludeProp(['size']);