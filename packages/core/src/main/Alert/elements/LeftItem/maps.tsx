import { AlertColor, AlertSize } from '@core/src/main/Alert/elements';
import React, { ReactElement } from 'react';
import {
    CheckmarkCircleIconSmall,
    CheckmarkCircleIconLarge,
    EnvelopeIconLarge,
    AttentionRhombusIconLarge,
    AttentionRhombusIconSmall,
    AttentionTriangleIconSmall,
    AttentionTriangleIconLarge,
    EnvelopeIconSmall,
    InfoIcon,
    LightningIcon,
    DocumentTextIcon,
    AttentionCircleIcon,
} from './assets';
import { ALERT_COLORS } from '../../constants';

export const mapColorToLeftItem: Record<AlertSize, Record<AlertColor, ReactElement>> = {
    small: {
        [ALERT_COLORS.brand]: <LightningIcon />,
        [ALERT_COLORS.secondary]: <EnvelopeIconSmall />,
        [ALERT_COLORS.info]: <InfoIcon />,
        [ALERT_COLORS.success]: <CheckmarkCircleIconSmall />,
        [ALERT_COLORS.warning]: <AttentionTriangleIconSmall />,
        [ALERT_COLORS.danger]: <AttentionRhombusIconSmall />,
        [ALERT_COLORS.default]: <AttentionRhombusIconSmall />,
    },
    large: {
        [ALERT_COLORS.brand]: <DocumentTextIcon />,
        [ALERT_COLORS.secondary]: <EnvelopeIconLarge />,
        [ALERT_COLORS.info]: <AttentionCircleIcon />,
        [ALERT_COLORS.success]: <CheckmarkCircleIconLarge />,
        [ALERT_COLORS.warning]: <AttentionTriangleIconLarge />,
        [ALERT_COLORS.danger]: <AttentionRhombusIconLarge />,
        [ALERT_COLORS.default]: <AttentionRhombusIconLarge />,
    },
};
