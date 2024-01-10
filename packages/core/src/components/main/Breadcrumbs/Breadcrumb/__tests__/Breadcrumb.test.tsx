import {
    Breadcrumb,
    BreadcrumbProps,
    BreadcrumbStyleParams,
    PALETTE_COLORS,
} from '@core';
import { testStyleParams } from '@core/test-utils';

describe('Breadcrumb', () => {
    testStyleParams<BreadcrumbStyleParams, BreadcrumbProps>(
        Breadcrumb,
        {
            size: 'medium',
            disableFocus: false,
            color: 'brand',
            type: 'link',
        },
        {
            value: '1',
            link: '#',
            children: 'Скидка 300 ₽ на любой заказ от 1 500 ₽',
        },
    )({
        color: Object.values(PALETTE_COLORS),
        size: ['small', 'medium', 'large'],
        disableFocus: [false, true],
        type: ['contained', 'link'],
    });
});
