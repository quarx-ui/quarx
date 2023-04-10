import React, { ReactElement } from 'react';
import { SNACKBAR_COLORS } from '@core/src/main/Snackbar/styles';
import { CheckmarkCircleIcon as CheckmarkCircleIconSmall } from '@quarx-ui/icons/src/checkmark-circle/24px/stroke/rounded';
import { CheckmarkCircleIcon as CheckmarkCircleIconLarge } from '@quarx-ui/icons/src/checkmark-circle/36px/stroke/rounded';
import { AttentionTriangleIcon as AttentionTriangleIconSmall } from '@quarx-ui/icons/src/attention-triangle/24px/stroke/rounded';
import { AttentionTriangleIcon as AttentionTriangleIconLarge } from '@quarx-ui/icons/src/attention-triangle/36px/stroke/rounded';
import { InfoIcon } from '@quarx-ui/icons/src/info/24px/stroke/rounded';
import { AttentionRhombusIcon as AttentionRhombusIconSmall } from '@quarx-ui/icons/src/attention-rhombus/24px/stroke/rounded';
import { AttentionRhombusIcon as AttentionRhombusIconLarge } from '@quarx-ui/icons/src/attention-rhombus/36px/stroke/rounded';
import { LightningIcon } from '@quarx-ui/icons/src/lightning/24px/stroke/rounded';
import { DocumentTextIcon } from '@quarx-ui/icons/src/document-text/36px/stroke/rounded';
import { EnvelopeIcon as EnvelopeIconSmall } from '@quarx-ui/icons/src/envelope/24px/stroke/rounded';
import { EnvelopeIcon as EnvelopeIconLarge } from '@quarx-ui/icons/src/envelope/36px/stroke/rounded';
import { AttentionCircleIcon } from '@quarx-ui/icons/src/attention-circle/36px/stroke/rounded';
import { SnackbarColor, SnackbarSize } from '../types';

export const mapColorToLeftItem: Record<SnackbarSize, Record<SnackbarColor, ReactElement>> = {
    small: {
        [SNACKBAR_COLORS.brand]: <LightningIcon />,
        [SNACKBAR_COLORS.secondary]: <EnvelopeIconSmall />,
        [SNACKBAR_COLORS.info]: <InfoIcon />,
        [SNACKBAR_COLORS.success]: <CheckmarkCircleIconSmall />,
        [SNACKBAR_COLORS.warning]: <AttentionTriangleIconSmall />,
        [SNACKBAR_COLORS.danger]: <AttentionRhombusIconSmall />,
        [SNACKBAR_COLORS.default]: <AttentionRhombusIconSmall />,
    },
    large: {
        [SNACKBAR_COLORS.brand]: <DocumentTextIcon />,
        [SNACKBAR_COLORS.secondary]: <EnvelopeIconLarge />,
        [SNACKBAR_COLORS.info]: <AttentionCircleIcon />,
        [SNACKBAR_COLORS.success]: <CheckmarkCircleIconLarge />,
        [SNACKBAR_COLORS.warning]: <AttentionTriangleIconLarge />,
        [SNACKBAR_COLORS.danger]: <AttentionRhombusIconLarge />,
        [SNACKBAR_COLORS.default]: <AttentionRhombusIconLarge />,
    },
};
