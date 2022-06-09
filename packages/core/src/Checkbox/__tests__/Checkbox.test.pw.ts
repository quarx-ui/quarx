import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'checkbox';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            size: ['small', 'medium', 'large'],
            borderRadius: ['square', 'smooth'],
            disabled: ['true'],
            hasError: ['true'],
        },
        component,
    });
});
