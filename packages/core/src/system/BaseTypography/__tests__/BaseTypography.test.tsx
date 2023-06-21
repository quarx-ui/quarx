import { render, screen } from '@testing-library/react';
import {
    BASE_TYPOGRAPHY_TYPES,
    BaseTypography,
    BaseTypographyProps,
    BaseTypographyStyleParams,
    PALETTE_TEXT_KEYS,
    QX_SIZE, TYPOGRAPHY_WEIGHT,
} from '@core';
import { testStyleParams } from '@core/test-utils';

describe('BaseTypography', () => {
    testStyleParams<BaseTypographyStyleParams, BaseTypographyProps>(
        BaseTypography,
        {
            size: QX_SIZE.medium,
            type: BASE_TYPOGRAPHY_TYPES.text,
            color: PALETTE_TEXT_KEYS.main,
            fontWeight: TYPOGRAPHY_WEIGHT.normal,
        },
        {
            children: 'Текст для примера',
        },
    )({
        size: Object.values(QX_SIZE),
        type: Object.values(BASE_TYPOGRAPHY_TYPES),
        color: Object.values(PALETTE_TEXT_KEYS).concat(['customColor' as never]),
        fontWeight: Object.values(TYPOGRAPHY_WEIGHT),
    });
});

describe('BaseTypography behavior', () => {
    it('text should be in the document', () => {
        render(<BaseTypography>BaseTypography</BaseTypography>);

        expect(screen.queryByText('BaseTypography')).toBeInTheDocument();
    });
});
