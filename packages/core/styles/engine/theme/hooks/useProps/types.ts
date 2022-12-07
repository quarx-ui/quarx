import { Styles, WithPermissions } from '@core';

export type UsePropsType<Props extends object, StyleKey extends string> =
    & Props
    & WithPermissions
    & { styles?: Styles<StyleKey> }
