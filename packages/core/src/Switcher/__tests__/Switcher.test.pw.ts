import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'switcher';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            size: ['small', 'medium', 'large'],
            disabled: ['true'],
            hasError: ['true'],
            position: ['right'],
        },
        component,
    });
});
