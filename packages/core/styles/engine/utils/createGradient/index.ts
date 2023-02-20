import { DARKEST, LIGHTEST } from '@core/styles/engine/theme/palette/defaultColors';
import { changeOpacity } from '../changeOpacity';

interface GradientColor {
    color: string,
    point?: number,
}

interface CreateGradientProps {
    angle?: number,
    colors: GradientColor[],
}

type CreateGradient = (options: CreateGradientProps) => string;

export const createLinearGradient: CreateGradient = ({
    angle = 90,
    colors,
}) => {
    const reducedColors = colors.reduce((prevColor, curColorObj) => {
        const curColorPoint = curColorObj.point ? ` ${curColorObj.point}%` : '';
        const curColor = `${curColorObj.color}${curColorPoint}`;

        return (prevColor && prevColor !== '')
            ? [prevColor, curColor].join(', ')
            : curColor;
    }, '');

    return `linear-gradient(${angle}deg, ${reducedColors})`;
};

export const createLightGradient = (color: string, background: string = LIGHTEST) => {
    const gradient = createLinearGradient({
        angle: 100.9,
        colors: [
            {
                color: changeOpacity(color, 0.08),
                point: 0.2
            },
            {
                color: changeOpacity(color, 0),
                point: 50,
            },
        ],
    });
    return `${gradient}, ${background}`;
};

// linear-gradient(100.9deg, rgba(37, 181, 63, 0.32) 0.2%, rgba(37, 181, 63, 0) 50%), linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #02050A;

export const createDarkGradient = (color: string, text: string = LIGHTEST, background: string = DARKEST) => {
    const gradient = createLinearGradient({
        angle: 100.9,
        colors: [
            {
                color: changeOpacity(color, 0.32),
                point: 0.2
            },
            {
                color: changeOpacity(color, 0),
                point: 50,
            },
        ],
    });

    const gradient2 = createLinearGradient({
        angle: 0,
        colors: [
            { color: changeOpacity(text, 0.12) },
            { color: changeOpacity(text, 0.12) },
        ]
    })
    return `${gradient}, ${gradient2}, ${background}`;
};
