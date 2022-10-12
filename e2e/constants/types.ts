import { ComponentsProps } from '@kit';

type InnerComponentsE2E = 'DatePickerAllowedDates' | 'FrenchDatePicker';
export type ComponentsListTypes = keyof ComponentsProps | InnerComponentsE2E // не выносить отсюда! не будут запускаться тесты
export type PathTypes = { [Property in ComponentsListTypes]: Property }
export type PropValueType = string | number | boolean | undefined

export type TestComponentProps<
    ComponentProps,
    Overwrites extends Partial<Record<keyof ComponentProps, PropValueType>>
> = Overwrites & Omit<Partial<ComponentProps>, keyof Overwrites>
