import { render, screen } from '@testing-library/react';
import { PALETTE_TEXT_KEYS, QX_SIZE, Text, TextProps, TextStyleParams, TYPOGRAPHY_WEIGHT } from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';

describe('Text', () => {
    testStyleParams<TextStyleParams, TextProps>(
        Text,
        {
            size: QX_SIZE.medium,
            color: PALETTE_TEXT_KEYS.main,
            fontWeight: TYPOGRAPHY_WEIGHT.normal,
        },
        {
            children: 'Текст для примера',
        },
    )({
        size: Object.values(QX_SIZE),
        color: Object.values(PALETTE_TEXT_KEYS).concat(['customColor' as never]),
        fontWeight: Object.values(TYPOGRAPHY_WEIGHT),
    });
});

describe('Text behavior', () => {
    it('text should be in the document', () => {
        render(<Text>Text</Text>);

        expect(screen.queryByText('Text')).toBeInTheDocument();
    });
});
