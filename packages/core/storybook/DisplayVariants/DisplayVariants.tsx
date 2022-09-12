import React, { FC } from 'react';
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

type ValuesType = string | boolean | number

interface BaseVariantProps<VariantProps> extends
    Pick<DisplayVariantsStyledProps, 'containerAlign' | 'containerJustify' | 'variantAlign'> {
    /** Компонент, который необходимо отобразить. Не рекомендуется оборачивать его другим компонентом. */
    component: FC<VariantProps>,

    /** Объект с дополнительными параметрами компонента. Применяется не в качестве отдельного примера. */
    componentProps?: VariantProps,

    /** Направление отрисовки.
     * @param vertical Вертикальное направление. Варианты будут расположены в колонну.
     * @param horizontal Горизонтальное направление. Варианты будут расположены в ряд. */
    direction?: 'vertical' | 'horizontal',
}

interface TitleProps {
    /** Размер заголовка
     * @param primary Основной заголовок
     * @param secondary Вторичный заголовок */
    size?: 'primary' | 'secondary',

    /** Показать/скрыть заголовок */
    isShown?: boolean,

    /** Тип заголовка
     * @param property Название свойства
     * @param value Значение свойства */
    type?: 'property' | 'value',
}

interface DisplayVariantsProps<VariantProps> extends BaseVariantProps<VariantProps> {
    /** Название отображаемого пропса */
    property: string,

    /** Массив значений для отображаемого пропса
     * @example
     * ['small', 'medium', 'large'] */
    values: Array<ValuesType>,

    /** Объект с настройками названия свойства */
    title?: TitleProps,
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

    const examples = values.map((value) => (
        <Variant
            key={createID()}
            optionTitle={title.isShown}
            variantAlign={variantAlign}
        >
            {title.isShown && (
                <Title size={title.size}>
                    {title.type === 'value' ? value.toString() : property}
                </Title>
            )}
            {React.createElement(
                component,
                {
                    ...componentProps as unknown as Props,
                    [property]: value,
                },
            )}
        </Variant>
    ));

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
    variants: Record<string, Array<ValuesType>>,

    shownTitle?: boolean,

    /** Объект с настройками названия свойства */
    optionTitle?: TitleProps,
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
    const keysOfProps = Object.keys(variants);

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
                keysOfProps.map((property) => (
                    <Container
                        direction={direction}
                        containerAlign={restOptions.containerAlign}
                        containerJustify={
                            restOptions.containerJustify
                            ?? variants[property].length < 3
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
                                values: variants[property],
                            })
                        }
                    </Container>
                ))
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
    properties: Array<string>,
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
        ...restOptions
    } = options;
    const variants: Record<string, Array<ValuesType>> = {};

    properties.forEach((prop) => {
        variants[prop] = [true];
    });
    return DisplayVariantsMap({
        variants,
        direction,
        optionTitle,
        ...restOptions,
    });
}
