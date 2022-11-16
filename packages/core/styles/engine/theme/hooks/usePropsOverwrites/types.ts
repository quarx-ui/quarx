import { Permissions, Styles, WithPermissions } from '@core';
import {
    TypedCnFormatter,
    UseBemPropsType,
    UseBemTypeCast
} from '@core/styles/engine/theme/hooks/useBem/types';

export interface StyleProps<
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> {
    styles: Styles<StyleKey>;
    cssVars?: CSSVarNames;
    cssPrefix?: string;
}

export type UsePropsOverwritesPropsType<
    Props extends object,
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> =
    & Props
    & UseBemPropsType<Props, StyleKey>
    & {
        cssVars?: Partial<Record<keyof CSSVarNames, unknown>>;
        cssPrefix?: string;
    }

export type UsePropsOverwritesPropsTypeCast<
    Props extends object,
    StyleKey extends string,
    CSSVarNames extends Partial<Record<string, string>> = Record<string, string>
> =
    & UsePropsOverwritesPropsType<Props, StyleKey, CSSVarNames>
    & UseBemTypeCast<Props, StyleKey>
    & WithPermissions

export interface UsePropsOverwritesReturnType<
    Props,
    StyleKey extends string,
    CSSVars extends Partial<Record<string, string>>
> {
    props: Omit<Props, keyof StyleProps<StyleKey, CSSVars> | 'ref'> & Permissions;
    cn: TypedCnFormatter<StyleKey>;
    name: string;
    qxName: string;
    styleProps: StyleProps<StyleKey, CSSVars>;
}
