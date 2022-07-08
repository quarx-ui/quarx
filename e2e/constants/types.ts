import { ComponentsProps } from '@kit';

export type ComponentsListTypes = keyof ComponentsProps
export type PathTypes = { [Property in ComponentsListTypes]: Property }
export type PropValueType = string | number | boolean | undefined

export type TestComponentProps<
    ComponentProps,
    Overwrites extends Partial<Record<keyof ComponentProps, PropValueType>>
> = Overwrites & Omit<Partial<ComponentProps>, keyof Overwrites>
