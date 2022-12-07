import { Styles, WithPermissions, Permissions } from '@core';

export type UsePropsType<Props extends object, StyleKey extends string> =
    & Props
    & WithPermissions
    & { styles?: Styles<StyleKey> }

export type UsePropsReturn<Props extends object> =
    & Omit<Props, 'styles'>
    & Permissions
