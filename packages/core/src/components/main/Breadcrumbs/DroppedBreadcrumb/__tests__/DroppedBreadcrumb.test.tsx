import {
    BreadcrumbStyleParams,
    DroppedBreadcrumb,
    DroppedBreadcrumbProps,
} from '@core';
import { testStyleParams } from '@core/test-utils';

describe('Breadcrumb', () => {
    testStyleParams<Pick<BreadcrumbStyleParams, 'disableFocus'>, DroppedBreadcrumbProps>(
        DroppedBreadcrumb,
        {
            disableFocus: false,
        },
        {
            value: '1',
            link: '#',
            children: 'Скидка 300 ₽ на любой заказ от 1 500 ₽',
        },
    )({
        disableFocus: [false, true],
    });
});
