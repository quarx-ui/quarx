import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'badge';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            borderRadius: ['square', 'smooth', 'rounded'],
            size: ['small', 'large'],
            type: ['filled', 'outline'],
            color: ['color1', 'color2', 'warning', 'critical'],
        },
        component,
    });
});
