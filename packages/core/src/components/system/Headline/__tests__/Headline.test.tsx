import { render, screen } from '@testing-library/react';
import { Headline, HeadlineProps, HeadlineStyleParams, PALETTE_TEXT_KEYS, QX_SIZE, TYPOGRAPHY_WEIGHT } from '@core';
import { testStyleParams } from '@core/test-utils';

describe('Headline', () => {
    testStyleParams<HeadlineStyleParams, HeadlineProps>(
        Headline,
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

describe('Headline behavior', () => {
    it('text should be in the document', () => {
        render(<Headline>Headline</Headline>);

        expect(screen.queryByText('Headline')).toBeInTheDocument();
    });
});
