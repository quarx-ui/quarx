import { MutableRefObject, RefObject } from 'react';
import { Values } from '@core/types';
import { CalcOverflowOptions } from '@core/utils/hooks/useFloating/utils';
import { ALIGNMENTS, AXES, DIMENSIONS, ARRANGEMENTS, SIDES, CLIPPING_CONTEXTS, ROOT_BOUNDARIES } from './constants';

export type Side = Values<typeof SIDES>

export type Alignment = Values<typeof ALIGNMENTS>

export type Axis = Values<typeof AXES>

export type Dimension = Values<typeof DIMENSIONS>

export type Arrangement = Values<typeof ARRANGEMENTS>

export type ClippingContext = Values<typeof CLIPPING_CONTEXTS>

export type RootBoundary = Values<typeof ROOT_BOUNDARIES>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Boundary = any

export type AlignedPlacement = `${Side}-${Alignment}`

export type Placement = Side | AlignedPlacement

export type Position = Record<Axis, number>

export type Dimensions = Record<Dimension, number>

export type Rect = Position & Dimensions

export type Offset = number | OffsetTuple | OffsetMap

export type OffsetTuple =
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]

export type OffsetMap = { [key in Side]: number };

export type ClientRect = Rect & OffsetMap

export interface FlipOptions extends CalcOverflowOptions {
    /**
     * Проверка переполнения по основной оси
     * @default true
     */
    mainAxis?: boolean;
    /**
     * Проверка переполнения по оси выравнивания
     * @default false
     */
    altAxis?: boolean;
    /**
     * Расстояние от границы переполнения, на котором начинает происходить переворот
     * @default 8
     * */
    edgeOffset?: number;
    /** Зафиксировать сторону открытия после первого рендера */
    lockPlacementWhileOpen?: boolean;
    /**
     * Реф с положением попапа после первого рендера.
     * Уже передается из useFloating, его не нужно передавать
     * */
    placementAfterFirstRenderRef: MutableRefObject<Placement| null>;
}

export interface ShiftOptions extends CalcOverflowOptions {
    /**
     * Проверка переполнения по основной оси
     * @default true
     */
    mainAxis?: boolean;
    /**
     * Проверка переполнения по оси выравнивания
     * @default true
     */
    altAxis?: boolean;
    /**
     * Расстояние от границы переполнения, на котором начинает происходить смещение
     * @default 8
     * */
    edgeOffset?: number;
}

export interface ModifiersOptions {
    /** Отступ от якорного элемента */
    offset?: number;

    /** Переворот при отсутствии свободного места для корректной отрисовки */
    flip?: Omit<FlipOptions, 'placementAfterFirstRenderRef'>;

    /** Ограничение отрисовки только внутри видимой области */
    shift?: ShiftOptions;
}

export interface UseFloatingProps {
    /** Якорный элемент */
    anchor: RefObject<HTMLElement> | Position;

    /** Плавающий элемент */
    floatingRef: RefObject<HTMLElement>;

    /** Видимость элемента */
    open: boolean;

    /** Расположение плавающего элемента */
    placement?: Placement;

    /** Отключение отступа между floating и якорным элементами
     *
     * @default false */
    disableOffset?: boolean;

    /** Отключение переворота при отсутствии свободного места для корректной отрисовки
     *
     * @default false */
    disableFlip?: boolean;

    /** Отключение ограничения отрисовки только внутри видимой области
     *
     * @default false */
    disableShift?: boolean;

    /** Параметры модификаторов плавающего элемента */
    modifiersOptions?: ModifiersOptions;

    /** Пользовательские модификаторы координат плавающего элемента */
    customModifiers?: FloatingPositionModifier[];

    /** Позиционирование
     *
     * @default absolute */
    arrangement?: Arrangement;
}

export interface GetFloatingPositionProps {
    /** Плавающее расположение */
    placement: Placement;

    /** Якорный элемент */
    anchor: HTMLElement | Position;

    /** Плавающий элемент */
    floating: HTMLElement;

    /** Позиционирование плавающего элемента */
    arrangement: Arrangement;

    /** Пользовательские модификаторы координат плавающего элемента */
    modifiers?: (FloatingPositionModifier | false | undefined)[];
}

export type FloatingPositionModifier = (
    position: Position,
    context: GetFloatingPositionModifiersContext,
) => Position

export interface GetFloatingPositionContext extends Omit<GetFloatingPositionProps, 'modifiers'> {
    /** Главная ось */
    mainAxis: Axis;

    /** Альтернативная ось */
    altAxis: Axis;

    /** Размеры и расположение */
    rects: Record<'anchor' | 'floating', Rect>;

    /** Сторона привязки относительно якорного элемента */
    side: Side;

    /** Позиционирование плавающего элемента */
    arrangement: Arrangement;

    /** Выравнивание плавающего элемента относительно якорного элемента */
    alignment?: Alignment;
}

export interface GetFloatingPositionModifiersContext extends GetFloatingPositionContext {
    /** Данные пользовательских модификаторов координат */
    modifiersData: {
        previous: FloatingPositionModifier[];
    };
}

export interface PositionWithModifiersProps {
    /** Координаты плавающего элемента */
    position: Position;

    /** Пользовательские модификаторы координат плавающего элемента */
    modifiers: FloatingPositionModifier[];

    /** Контекст обработки */
    context: GetFloatingPositionModifiersContext;
}

export interface UseFloatingResult {
    /** Координаты плавающего элемента */
    floating: Record<Axis, number>;
}
