import { Palette } from '@core';
import { CSSObject } from '@emotion/react';

export const inlineSVGHover = (height: number, width: number, color: string) => {
    const strokeDashWidth = 2;
    const strokeDashOffset = 2;
    const strokeDashArray = '3 2';
    const svg = `url("data:image/svg+xml;utf8,<svg width='${width - 1}px' height='${height}px' viewBox='0 0 ${width - 1} ${height}' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 0 H12' style='stroke: ${color}; stroke-opacity: 1; stroke-dasharray: ${strokeDashArray}; stroke-width: ${strokeDashWidth}; stroke-dashoffset: ${strokeDashOffset}' /><path d='M0 ${height} H12' style='stroke: ${color}; stroke-opacity: 1; stroke-dasharray: ${strokeDashArray}; stroke-width: ${strokeDashWidth}; stroke-dashoffset: ${strokeDashOffset}' /></svg>")`;
    return svg;
};
export const inlineSVGHoverFirstDay = (height: number, color: string) => `url("data:image/svg+xml,%3Csvg width='12px' height='40px' viewBox='0 0 12 ${height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 H12' stroke='${color}' stroke-opacity='0.16' stroke-dasharray='3 2' stroke-width='2' stroke-dashoffset='3'/%3E%3Cpath d='M0 ${height} H12' stroke='${color}' stroke-opacity='0.16' stroke-dasharray='3 2' stroke-width='2' stroke-dashoffset='3'/%3E%3C/svg%3E")`;
export const inlineSVGHoverLastDay = (height: number, color: string) => `url("data:image/svg+xml,%3Csvg width='12px' height='40px' viewBox='0 0 12 ${height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 H12' stroke='${color}' stroke-opacity='0.16' stroke-dasharray='3 2' stroke-width='2' stroke-dashoffset='3'/%3E%3Cpath d='M0 ${height} H12' stroke='${color}' stroke-opacity='0.16' stroke-dasharray='3 2' stroke-width='2' stroke-dashoffset='3'/%3E%3C/svg%3E")`;

export const getActiveDayStyles = (palette: Palette) => ({
    background: palette.colors.brand.default,
    color: palette.text.constant,
    border: 'none',
    zIndex: 100,
});

const isFirstDayOfRow = ':nth-of-type(15n+1)';
const isLastDayOfRow = ':nth-of-type(15n)';

export const getCustomHover = (isLarge: boolean) => (isLarge ? {} : {
    [`&${isFirstDayOfRow}`]: {
        backgroundImage: inlineSVGHoverFirstDay, // todo понять куда это вообще идет
    },
    [`&${isLastDayOfRow}`]: {
        backgroundImage: inlineSVGHoverLastDay,
    },
});

export const getCommonBefore = (
    palette: Palette, borderRadius: number, daySize: number, additionalStyles: CSSObject,
): CSSObject => ({
    '&::before': {
        content: '""',
        width: borderRadius,
        height: daySize,
        position: 'absolute',
        boxSizing: 'border-box',
        ...additionalStyles,
    },
});

export const getCommonAfter = (
    palette: Palette, borderRadius: number, daySize: number, additionalStyles: CSSObject,
): CSSObject => ({
    '&::after': {
        content: '""',
        width: borderRadius,
        height: daySize,
        position: 'absolute',
        boxSizing: 'border-box',
        marginLeft: daySize - borderRadius,
        ...additionalStyles,
    },
});
