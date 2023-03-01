import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import {
    cssVar,
    paramsToCss,
    QX_SIZE,
    SELECTION_TREE_TYPE,
    SELECTION_TYPE,
    SelectionTreeSize,
} from '@core';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { SelectionTreeNodeStyleParams } from './types';
import { SelectionTreeNodeCSSVarKeys } from './vars';

const commonTextNodeStyles = { backgroundColor: 'transparent' };

const containedNodePaddings: Record<SelectionTreeSize, number> = {
    [QX_SIZE.small]: 8,
    [QX_SIZE.medium]: 12,
    [QX_SIZE.large]: 16,
};

const IconWidths: Record<SelectionTreeSize, number> = {
    [QX_SIZE.small]: 16,
    [QX_SIZE.medium]: 24,
    [QX_SIZE.large]: 24,
};

const IconRightMargins: Record<SelectionTreeSize, number> = {
    [QX_SIZE.small]: 8,
    [QX_SIZE.medium]: 8,
    [QX_SIZE.large]: 12,
};

export const useStyles = makeStyles((
    { palette, transitions },
    {
        open,
        size,
        type,
        hover,
        disabled,
        disableArrowFocus,
        level,
        isClickedToArrow,
    }: SelectionTreeNodeStyleParams,
    {
        cssBorderWidth,
        cssFocusColor,
        cssFocusWidth,
    }: Record<SelectionTreeNodeCSSVarKeys, string>,
) => {
    const arrowDirection = open ? 'rotate(90deg)' : '';
    const isSubNode = level > 0;
    const containedNodePadding = containedNodePaddings[size];
    const iconWidth = IconWidths[size];
    const iconRightMargin = IconRightMargins[size];
    const nodeLeftIndent = (iconWidth + iconRightMargin) * level;
    const containedNodeLeftIndent = containedNodePadding + nodeLeftIndent;

    const commonContainedNodeStyles = {
        padding: containedNodePadding,
        backgroundColor: palette.background.main,
        borderRadius: 8,
        ...hover && { backgroundColor: palette.background.container.hover },
        ...disabled && { cursor: 'no-drop' },
    };

    return ({
        node: {
            display: 'flex',
            boxSizing: 'border-box',
            width: '100%',
            border: 'none',
            outline: 'none',

            ...paramsToCss(type)({
                [SELECTION_TYPE.text]: {
                    ...commonTextNodeStyles,
                    ...isSubNode && { paddingLeft: nodeLeftIndent },
                },
                [SELECTION_TYPE.contained]: {
                    ...commonContainedNodeStyles,
                    ...isSubNode && { paddingLeft: containedNodeLeftIndent },
                },
            }),
        },

        children: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflow: 'hidden',
            ...type === SELECTION_TREE_TYPE.text && {
                gap: 16,
            },
        },

        leftAdornment: {
            display: 'flex',
            minWidth: iconWidth,
            marginRight: iconRightMargin,
        },

        arrow: {
            color: palette.text.main,
            boxSizing: 'content-box',
            padding: 0,
            margin: 0,
            height: iconWidth,
            width: iconWidth,
            backgroundColor: 'transparent',
            transition: transitions.create(['transform']),
            transform: arrowDirection,
            ...isClickedToArrow && {
                transform: `scale(0.95) ${arrowDirection}`,
            },

            cursor: 'pointer',
            outline: 'none',

            border: '1px solid',
            borderColor: 'transparent',
            borderRadius: 4,
            [cssBorderWidth]: '1px',
            [cssFocusWidth]: '3px',
            [cssFocusColor]: palette.border.focus.main,
            ...baseFocusStyles({
                transitions,
                borderWidth: cssVar(cssBorderWidth),
                focusWidth: cssVar(cssFocusWidth),
            }),

            '&:focus-visible': !disableArrowFocus && stylesWithFocus({
                borderColor: cssVar(cssFocusColor),
            }),
        },

        selection: { padding: 0 },
    });
}, { name: 'QxSelectionTreeNode' });

export type SelectionTreeNodeStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
