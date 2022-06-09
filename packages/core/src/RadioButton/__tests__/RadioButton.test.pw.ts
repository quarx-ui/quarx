import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'radiobutton';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            size: ['small', 'medium', 'large'],
            disabled: ['true', 'false'],
            hasError: ['true', 'false'],
        },
        sxClassname: 'SxRadioButton',
        component,
    });
});
