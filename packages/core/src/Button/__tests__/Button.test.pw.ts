import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'button';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            borderRadius: ['square', 'smooth', 'rounded'],
            size: ['xSmall', 'small', 'medium', 'large'],
            type: ['contained', 'outlined', 'text'],
            color: ['primary', 'secondary', 'critical'],
            disabled: ['true', 'false'],
        },
        component,
    });
});
