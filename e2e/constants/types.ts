import { ComponentsProps } from '@kit';

export type ComponentsListTypes = keyof ComponentsProps
export type PathTypes = { [Property in ComponentsListTypes]: Property }
export type PropValueType = string | number | boolean | undefined
