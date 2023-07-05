import React, { createElement, FC } from 'react';
import { createID } from '@core';
import {
    Title,
    TitleOfContainer,
    Variant,
    Variants,
    Container,
    VerticalContainer,
} from './styledComponents';
import { DisplayVariantsStyledProps } from './types';

export type DisplayValuesType = string | boolean | number

interface BaseVariantProps<VariantProps> extends
    Pick<DisplayVariantsStyledProps, 'containerAlign' | 'containerJustify' | 'variantAlign'> {
    /** Компонент, который необходимо отобразить. Не рекомендуется оборачивать его другим компонентом. */
    component: FC<VariantProps>;

    /** Объект с дополнительными параметрами компонента. Применяется не в качестве отдельного примера. */
    componentProps?: VariantProps | ((property: keyof VariantProps, value: DisplayValuesType) => VariantProps);

    /** Направление отрисовки.
     * - **vertical** – вертикальное направление. Варианты будут расположены в колонну.
     * - **horizontal** – горизонтальное направление. Варианты будут расположены в ряд. */
    direction?: 'vertical' | 'horizontal';
}

interface TitleProps {
    /** Размер заголовка
     * - **primary** – основной заголовок
     * - **secondary** – вторичный заголовок */
    size?: 'primary' | 'secondary';

    /** Показать/скрыть заголовок */
    isShown?: boolean;

    /** Тип заголовка
     * - **property** – название свойства
     * - **value** – значение свойства */
    type?: 'property' | 'value';
}

export interface DisplayVariantsProps<VariantProps> extends BaseVariantProps<VariantProps> {
    /** Название отображаемого пропса */
    property: keyof VariantProps;

    /** Массив значений для отображаемого пропса
     * @example
     * ['small', 'medium', 'large'] */
    values: Array<DisplayValuesType>;

    /** Объект с настройками названия свойства */
    title?: TitleProps;
}

function isCallable<Props>(prop: BaseVariantProps<Props>['componentProps']): prop is ((property: keyof Props, value: DisplayValuesType) => Props) {
    return typeof prop === 'function';
}

/** Функция предназначена для генерации различных вариантов компонента.
 * Принимает одно свойство и несколько значений. */
export function DisplayVariants<Props>(options: DisplayVariantsProps<Props>) {
    const {
        property,
        values,
        component,
        componentProps,
        title = {
            type: 'value',
            isShown: true,
            size: 'primary',
        },
        direction = 'horizontal',
        containerAlign,
        containerJustify,
        variantAlign,
    } = options;

    const titleProps: TitleProps = {
        type: 'value',
        isShown: true,
        size: 'primary',
        ...title,
    };

    const examples = values.map((value) => {
        const props = isCallable(componentProps)
            ? componentProps(property, value)
            : componentProps;

        return (
            <Variant
                key={createID()}
                optionTitle={titleProps.isShown}
                variantAlign={variantAlign}
            >
                <React.Fragment>
                    {titleProps.isShown && (
                        <Title size={titleProps.size}>
                            {titleProps.type === 'value' ? value.toString() : property}
                        </Title>
                    )}
                    {createElement(
                        component,
                        {
                            ...props as Props,
                            [property]: value,
                        },
                    )}
                </React.Fragment>
            </Variant>
        );
    });

    return (
        <Variants
            direction={direction}
            containerAlign={containerAlign}
            containerJustify={containerJustify}
        >
            {examples}
        </Variants>
    );
}

DisplayVariants.defaultProps = {
    componentProps: {},
};

interface DisplayVariantsMapProps<VariantProps> extends BaseVariantProps<VariantProps> {
    /** Объект свойств, которые необходимо вывести в качестве примера
     * @example
     * {
     *     size: ['small', 'large'],
     *     color: ['warning', 'critical', 'color2', 'color1'],
     * } */
    variants: Partial<Record<keyof VariantProps, Array<DisplayValuesType>>>;

    shownTitle?: boolean;

    /** Объект с настройками названия свойства */
    optionTitle?: TitleProps;
}

/** Функция предназначена для генерации различных вариантов компонента.
 * Принимает сразу несколько свойств.
 * Возможен выбор вертикального или горизонтального направления
 * @return
 * Будут выведены варианты компонента сгруппированные по свойствам, для каждого значения по одному варианту */
export function DisplayVariantsMap<Props>(options: DisplayVariantsMapProps<Props>) {
    const {
        variants,
        direction = 'horizontal',
        shownTitle = true,
        optionTitle = {
            size: 'secondary',
            isShown: true,
            type: 'value',
        },
        ...restOptions
    } = options;
    const keysOfProps = Object.keys(variants) as Array<keyof Props>;

    return (
        <VerticalContainer
            direction={direction}
            containerJustify={
                restOptions.containerJustify
                ?? keysOfProps.length > 4
                    ? 'space-between'
                    : 'space-evenly'
            }
        >
            {
                keysOfProps.map((property) => {
                    const values = variants[property] ?? [];
                    return (
                        <Container
                            direction={direction}
                            containerAlign={restOptions.containerAlign}
                            containerJustify={
                                restOptions.containerJustify
                                ?? values.length < 3
                                    ? 'center'
                                    : 'space-between'
                            }
                            key={createID()}
                        >
                            {shownTitle && <TitleOfContainer direction={direction}>{property}</TitleOfContainer>}
                            {
                                DisplayVariants({
                                    ...restOptions,
                                    title: optionTitle,
                                    direction,
                                    property,
                                    values,
                                })
                            }
                        </Container>
                    );
                })
            }
        </VerticalContainer>
    );
}

DisplayVariantsMap.defaultProps = {
    componentProps: {},
};

interface DisplayBooleanVariantsProps<VariantProps> extends Omit<DisplayVariantsMapProps<VariantProps>, 'variants'> {
    /** Массив булевых свойств, которые необходимо вывести в качестве примера
     * @example
     * ['size', 'color'] */
    properties: Array<keyof VariantProps | [keyof VariantProps, boolean]>;
    bothValues?: boolean;
}

/** Функция предназначена для генерации различных вариантов компонента с булевыми свойствами.
 * Принимает сразу несколько булевых свойств.
 * По умолчанию установлено вертикальное направление, но возможен выбор горизонтального.
 * Названия значений свойств по умолчанию не выводятся, но это можно изменить.
 * @return
 * Будут выведены варианты компонента, где для каждого булевого свойства установлено значение `true` */
export function DisplayBooleanVariants<Props>(options: DisplayBooleanVariantsProps<Props>) {
    const {
        properties,
        direction = 'vertical',
        optionTitle = {
            size: 'secondary',
            isShown: false,
            type: 'value',
        },
        bothValues = false,
        ...restOptions
    } = options;

    const variants = {} as Partial<Record<keyof Props, Array<DisplayValuesType>>>;

    properties.forEach((prop) => {
        if (Array.isArray(prop)) {
            variants[prop[0]] = [prop[1]];
        } else {
            variants[prop] = bothValues
                ? [false, true]
                : [true];
        }
    });

    return DisplayVariantsMap({
        variants,
        direction,
        optionTitle,
        ...restOptions,
    });
}
