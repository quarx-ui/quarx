import { test } from '@playwright/test';
import { comparePropertiesMapSnapshots } from '../../../../../test-utils/pw';

const component = 'selection';

test.describe(component, () => {
    comparePropertiesMapSnapshots({
        props: {
            size: ['small', 'medium', 'large'],
            borderRadius: ['square', 'smooth'],
            disabled: ['true'],
            color: ['brand', 'success', 'warning', 'danger'],
            reverse: ['true'],
        },
        sxClassname: 'SxCheckboxSelection',
        component,
    });
});
