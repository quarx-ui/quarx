import { ComponentsProps, QX_PREFIX } from '@core';
import { cn as bem } from '@bem-react/classname';
import clsx from 'clsx';
import { unifyClassName } from '@core/styles/engine/theme/hooks/usePropsOverwrites/helpers';
import { TypedCnFormatter, UseBemPropsType, UseBemTypeCast } from './types';

export const useBem = <Props extends object, StyleKey extends string>(
    name: keyof ComponentsProps | string,
    props: UseBemPropsType<Props, StyleKey>,
) => {
    const typedProps = props as UseBemTypeCast<Props, StyleKey>;
    const {
        classes,
        className,
    } = typedProps;
    const qxName = name.startsWith(QX_PREFIX)
        ? name
        : `${QX_PREFIX}${name}`;
    const bemCn = bem(qxName);
    const cn: TypedCnFormatter<StyleKey> = (key, ...args: any) => unifyClassName(
        key === 'root'
            ? clsx(bemCn(...args), classes?.[key], className)
            : clsx(bemCn(key, ...args), classes?.[key]),
    );
    return { cn, name };
};
