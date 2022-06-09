import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'counter';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        component,
        props: {
            type: ['filled', 'outline'],
            color: ['color1', 'color2', 'warning', 'critical'],
            size: ['small', 'large'],
        },
    });
});
