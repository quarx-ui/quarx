/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { FC, MouseEventHandler, useState } from 'react';
import { createPalette, getContrastColor, makeStyles, typography, useTheme } from '@core/styles';
import {
    PaletteColor,
    PaletteColorValues,
    PaletteStandardKey,
    PaletteTextKey,
    PaletteAlphaKey,
    PaletteBackgroundContainerKey,
    PaletteBackgroundTextFieldKey,
    PaletteBorderFocusKey,
} from '@core/styles/engine/theme/palette/types';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

interface ColorsStoryProps {
    type: PaletteColor,
    value: keyof Omit<PaletteColorValues, 'weaker' | 'stronger' | 'alpha'> |
    'alpha[8]' |
    'alpha[16]',
    background: PaletteStandardKey | 'textField.main' | 'textField.secondary' | 'container.hover',
    border: PaletteStandardKey | 'focus.dark' | 'focus.light',
    text: PaletteTextKey,
}

const defaultArgs: ColorsStoryProps = {
    type: 'brand',
    value: 'default',
    background: 'main',
    border: 'main',
    text: 'main',
};

export default {
    title: STORY_PATHS.core.style('colors'),
    argTypes: {
        type: {
            description: 'Тип цвета',
            options: ['brand', 'secondary', 'info', 'success', 'warning', 'danger'],
            control: { type: 'select' },
        },
        value: {
            description: 'Значение цвета',
            options: [
                'default',
                'light',
                'contrastText',
                'border',
                'surface',
                'bg',
                'press',
                'hover',
                'gradient',
                'alpha[8]',
                'alpha[16]',
            ],
            control: { type: 'select' },
        },
        background: {
            description: 'Фон',
            options: ['main', 'secondary', 'textField.main', 'textField.secondary', 'container.hover'],
            control: { type: 'select' },
        },
        border: {
            description: 'Обводка',
            options: ['main', 'secondary', 'focus.dark', 'focus.light'],
            control: { type: 'select' },
        },
        text: {
            description: 'Текст',
            options: ['main', 'secondary', 'tertiary', 'constant'],
            control: { type: 'select' },
        },
    },
    args: defaultArgs,
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: { hidden: true },
        },
    },
};

const useStylesSandbox = makeStyles((
    { palette },
    { type, value: srcValue, border: srcBorder, background: srcBack, text }: ColorsStoryProps,
) => {
    let alpha: PaletteAlphaKey;
    let value: string;
    let textField: PaletteBackgroundTextFieldKey;
    let container: PaletteBackgroundContainerKey;
    let background: string;
    let focus: PaletteBorderFocusKey;
    let border: string;

    if (srcValue === 'alpha[8]' || srcValue === 'alpha[16]') {
        alpha = srcValue
            .split('[')[1]
            .split(']')[0] as PaletteAlphaKey;
        value = palette.colors[type].alpha[alpha];
    } else {
        value = palette.colors[type][srcValue];
    }

    if (srcBack === 'textField.main' || srcBack === 'textField.secondary') {
        textField = srcBack.split('.')[1] as PaletteBackgroundTextFieldKey;
        background = palette.background.textField[textField];
    } else if (srcBack === 'container.hover') {
        container = srcBack.split('.')[1] as PaletteBackgroundContainerKey;
        background = palette.background.container[container];
    } else {
        background = palette.background[srcBack];
    }

    if (srcBorder === 'focus.dark' || srcBorder === 'focus.light') {
        focus = srcBorder.split('.')[1] as PaletteBorderFocusKey;
        border = palette.border.focus[focus];
    } else {
        border = palette.border[srcBorder];
    }

    return ({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: 30,
            background,
        },
        inner: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50,
            borderWidth: 20,
            borderStyle: 'solid',
            borderColor: border,
            background: value,
        },
        text: {
            color: palette.text[text],
            ...typography.Text.L.Medium,
        },
    });
});

export const Sandbox: Story<ColorsStoryProps> = ({
    type,
    value,
    border,
    background,
    text,
}) => {
    const styles = useStylesSandbox({ type, value, border, background, text });
    return (
        <div css={styles.root}>
            <div css={styles.inner}>
                <div css={styles.text}>Какой-то текст</div>
            </div>
        </div>
    );
};

Sandbox.storyName = 'Цвета';

const useStylesColor = makeStyles((
    { palette, transitions },
    { type, hover = false }: { type: PaletteColor, hover?: boolean },
) => {
    const common: CSSObject = {
        position: 'relative',
        padding: 15,
        marginBottom: 10,
        background: palette.background.secondary,
        cursor: 'pointer',
    };
    return ({
        root: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 8,
            width: '100%',
            ...typography.Text.M.Medium,
        },
        wrap: {
            display: 'flex',
            flexDirection: 'column',
        },
        wrapContrast: {
            gridColumn: '1 / 6',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 8,
        },
        contrast: {
            ...common,
            background: palette.colors[type].contrastText,
            border: `1px solid ${palette.border.main}`,
            color: palette.text.constant,
        },
        default: {
            ...common,
            background: palette.colors[type].default,
            color: getContrastColor(palette.colors[type].default),
        },
        border: {
            ...common,
            background: palette.colors[type].border,
        },
        surface: {
            ...common,
            background: palette.colors[type].surface,
        },
        bg: {
            ...common,
            background: palette.colors[type].bg,
        },
        gradient: {
            ...common,
            background: palette.colors[type].gradient,
        },
        press: {
            ...common,
            background: palette.colors[type].press,
            color: getContrastColor(palette.colors[type].press),
        },
        hover: {
            ...common,
            background: palette.colors[type].hover,
            color: getContrastColor(palette.colors[type].hover),
        },
        press16: {
            ...common,
            background: palette.colors[type].alpha[16],
        },
        hover8: {
            ...common,
            background: palette.colors[type].alpha[8],
        },

        overlay: [
            {
                position: 'absolute',
                left: '50%',
                top: '50%',
                opacity: 0,
                transition: transitions.create(['opacity', 'transform']),
                transformOrigin: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                transform: 'translate(-50%, -50%) scale(1.2)',
                pointerEvents: 'none',
            },
            hover && {
                pointerEvents: 'initial',
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1)',
            },
        ],
        left: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '50%',

            '&:after': {
                content: '"|"',
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
            },
        },
        right: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '50%',
        },
        content: [
            {
                width: '100%',
                height: '100%',
                transition: transitions.create('filter'),
            },
            hover && {
                filter: 'blur(6px)',
            },
        ],
    });
});

interface TemplateItemProps {
    type: PaletteColor,
    color: keyof Omit<PaletteColorValues, 'alpha' | 'weaker' | 'stronger' | 'contrastText'>
    | 'press16'
    | 'hover8'
    | 'press'
    | 'hover'
    | 'contrast',
}

const ColorItem: FC<TemplateItemProps> = ({
    type,
    color,
    children,
}) => {
    const [hover, setHover] = useState(false);
    const styles = useStylesColor({ type, hover });
    const [colorCopied, setColorCopied] = useState(false);
    const [pathCopied, setPathCopied] = useState(false);

    const { colors } = useTheme().palette;

    const mapColorToString: Record<TemplateItemProps['color'], string> = {
        default: colors[type].default,
        border: colors[type].border,
        surface: colors[type].surface,
        press: colors[type].press,
        hover: colors[type].hover,
        press16: colors[type].alpha[16],
        hover8: colors[type].alpha[8],
        gradient: colors[type].gradient,
        contrast: colors[type].contrastText,
        bg: colors[type].bg,
    };

    const mapPathToString: Record<TemplateItemProps['color'], string> = {
        default: `palette.colors.${type}.${color}`,
        border: `palette.colors.${type}.${color}`,
        surface: `palette.colors.${type}.${color}`,
        press: `palette.colors.${type}.${color}`,
        hover: `palette.colors.${type}.${color}`,
        press16: `palette.colors.${type}.alpha[16]`,
        hover8: `palette.colors.${type}.alpha[8]`,
        gradient: `palette.colors.${type}.gradient`,
        contrast: `palette.colors.${type}.contrastText`,
        bg: `palette.colors.${type}.${color}`,
    };

    const onClickColor: MouseEventHandler<HTMLDivElement> = () => {
        navigator.clipboard
            .writeText(mapColorToString[color])
            .then(() => setColorCopied(true));
    };

    const onClickPath: MouseEventHandler<HTMLDivElement> = () => {
        navigator.clipboard
            .writeText(mapPathToString[color])
            .then(() => setPathCopied(true));
    };

    return (
        <div
            css={styles[color]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
                setHover(false);
                setColorCopied(false);
                setPathCopied(false);
            }}
        >
            <div css={styles.content}>{children}</div>
            <div css={styles.overlay}>
                <div css={styles.left} onClick={onClickColor}>{colorCopied ? 'Copied' : 'Color'}</div>
                <div css={styles.right} onClick={onClickPath}>{pathCopied ? 'Copied' : 'Path'}</div>
            </div>
        </div>
    );
};

const Template: Story<{ type: PaletteColor }> = ({ type }) => {
    const styles = useStylesColor({ type });

    return (
        <div css={styles.root}>
            <div css={styles.wrap}>
                <ColorItem type={type} color="default">Default</ColorItem>
                <ColorItem type={type} color="gradient">Gradient</ColorItem>
            </div>
            <div css={styles.wrap}>
                <ColorItem type={type} color="border">Border</ColorItem>
                <ColorItem type={type} color="surface">Surface</ColorItem>
            </div>
            <div css={styles.wrap}>
                <ColorItem type={type} color="press">Press</ColorItem>
                <ColorItem type={type} color="hover">Hover</ColorItem>
            </div>
            <div css={styles.wrap}>
                <ColorItem type={type} color="press16">Press [alpha-16]</ColorItem>
                <ColorItem type={type} color="hover8">Hover [alpha-8]</ColorItem>
            </div>
            <div css={styles.wrap}>
                <ColorItem type={type} color="bg">Bg</ColorItem>
                <ColorItem type={type} color="contrast">Contrast</ColorItem>
            </div>
        </div>
    );
};

export const Brand = Template.bind({});
export const Secondary = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Brand.args = { type: 'brand' };
Secondary.args = { type: 'secondary' };
Info.args = { type: 'info' };
Success.args = { type: 'success' };
Warning.args = { type: 'warning' };
Danger.args = { type: 'danger' };

const COLORS = createPalette().colors;

const getColorSource = (color: PaletteColor) => `
palette: {
    colors: {
        ${color}: {
            default: ${COLORS[color].default},
            border: ${COLORS[color].border},
            bg: ${COLORS[color].bg},
            surface: ${COLORS[color].surface},
            press: ${COLORS[color].press},
            hover: ${COLORS[color].hover},
            gradient: ${COLORS[color].gradient},
            alpha: {
                8: ${COLORS[color].alpha[8]},
                16: ${COLORS[color].alpha[16]},
            },
        },
    },
}
`;

Brand.parameters = {
    docs: {
        source: { code: getColorSource('brand') },
    },
};

Secondary.parameters = {
    docs: {
        source: { code: getColorSource('secondary') },
    },
};

Info.parameters = {
    docs: {
        source: { code: getColorSource('info') },
    },
};

Success.parameters = {
    docs: {
        source: { code: getColorSource('success') },
    },
};

Warning.parameters = {
    docs: {
        source: { code: getColorSource('warning') },
    },
};

Danger.parameters = {
    docs: {
        source: { code: getColorSource('danger') },
    },
};
