import { ComponentsProps } from '@core';
import { cn as bem } from '@bem-react/classname';
import { TypedCnFormatter, UseBemPropsType, UseBemTypeCast } from './types';
import clsx from 'clsx';

export const useBem = <Props extends object, StyleKey extends string>(
    name: keyof ComponentsProps | string,
    props: UseBemPropsType<Props, StyleKey>,
) => {
    const typedProps = props as UseBemTypeCast<Props, StyleKey>

    const {
        classes,
        className,
    } = typedProps;

    const bemCn = bem(`Qx${name}`);

    const cn: TypedCnFormatter<StyleKey> = (key, ...args: any) => (
        key === 'root'
            ? clsx(bemCn(...args), classes?.[key], className)
            : clsx(bemCn(key, ...args), classes?.[key])
    );

    return { cn, name };
};
