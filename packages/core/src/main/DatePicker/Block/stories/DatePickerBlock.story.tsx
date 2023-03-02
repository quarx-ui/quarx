/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants/STORYBOOK_VIEWPORTS';
import { addDays } from 'date-fns';
import { getDateFnsLocale } from '@core';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { DatePicker,
    DATE_PICKER_DISPLAY_TYPES,
    DATE_PICKER_TIME_TYPES,
    DatePickerProps, PeriodTypeDates,
    PickerTypeDates,
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
    title: STORY_PATHS.core.components.main('block/DatePicker'),
    component: DatePicker,
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
    const [pickedDates, setPickedDates] = useState<PeriodTypeDates | undefined>(undefined);
    return (
        <React.Fragment>
            {pickedDates && Object.values(pickedDates).map((date) => `${date.toString()}\n`)}
            { /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
            { /* @ts-ignore */ }
            <DatePicker
                pickedDates={pickedDates}
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
    const [pickedDates, setPickedDates] = useState<PeriodTypeDates | undefined>(undefined);
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
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    component: DatePicker,
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setPickedDates,
                        pickedDates,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>DOUBLE</h3>
                {DisplayVariants({
                    property: 'size',
                    values: ['small', 'medium', 'large'],
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    component: DatePicker,
                    componentProps: {
                        ...props,
                        display: DATE_PICKER_DISPLAY_TYPES.DOUBLE,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setPickedDates,
                        pickedDates,
                    },
                })}
            </div>
        </div>
    );
};

export const BorderRadiusAndPickType: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodTypeDates | undefined>(undefined);
    const [selectedDate, setSelectedDate] = useState<PickerTypeDates | undefined>(undefined);
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
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    component: DatePicker,
                    direction: 'vertical',
                    componentProps: {
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PERIOD,
                        onChange: setPickedDates,
                        pickedDates,
                    },
                })}
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>PICKER</h3>
                {DisplayVariants({
                    property: 'borderRadius',
                    values: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    component: DatePicker,
                    direction: 'vertical',
                    componentProps: ({
                        ...props,
                        type: DATE_PICKER_TIME_TYPES.PICKER,
                        onChange: setSelectedDate,
                        pickedDates: selectedDate,
                    } as DatePickerProps),
                })}
            </div>
        </div>
    );
};

export const DisableYear: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PeriodTypeDates | undefined>(undefined);
    return (
        <div>
            {DisplayVariants({
                property: 'disableYearChange',
                values: [false, true],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                component: DatePicker,
                componentProps: {
                    ...props,
                    type: DATE_PICKER_TIME_TYPES.PERIOD,
                    onChange: setPickedDates,
                    pickedDates,
                },
            })}
        </div>
    );
};

export const AllowedDates: Story<StoryType> = (props) => {
    const [pickedDates, setPickedDates] = useState<PickerTypeDates | undefined>(undefined);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
        }}
        >
            <DatePicker
                allowedDates={{
                    start: addDays(new Date(), -7),
                    end: addDays(new Date(), 7),
                }}
                {...props}
                pickedDates={pickedDates}
                onChange={(newDates) => {
                    setPickedDates(newDates);
                }}
                type={DATE_PICKER_TIME_TYPES.PICKER}
            />
            <DatePicker
                allowedDates={{
                    start: addDays(new Date(), -7),
                }}
                {...props}
                pickedDates={pickedDates}
                onChange={(newDates) => {
                    setPickedDates(newDates);
                }}
                type={DATE_PICKER_TIME_TYPES.PICKER}
            />
            <DatePicker
                allowedDates={{
                    end: addDays(new Date(), 7),
                }}
                {...props}
                pickedDates={pickedDates}
                onChange={(newDates) => {
                    setPickedDates(newDates);
                }}
                type={DATE_PICKER_TIME_TYPES.PICKER}
            />
        </div>
    );
};

export const FrenchDatePicker = (props: DatePickerProps) => {
    const [pickedDate, setPickDate] = useState<PeriodTypeDates | undefined>();
    return (
        <DatePicker
            {...props}
            pickedDates={pickedDate}
            onChange={setPickDate}
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
