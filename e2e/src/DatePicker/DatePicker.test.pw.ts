import { initTest } from '@e2e/test-utils/initTest';
import { DatePickerProps } from '@kit/src/styled/DatePicker';
import { DATE_PICKER_DISPLAY_TYPES } from '@kit';

const { testProps } = initTest<DatePickerProps>('DatePicker');
const { testProps: testPropsAllowedDates } = initTest<DatePickerProps>('DatePickerAllowedDates', {
    selector: '.QxDatePicker',
});
const { testProps: testPropsFrench } = initTest<DatePickerProps>('FrenchDatePicker', {
    selector: '.QxDatePicker',
});

testProps('DatePicker', {
    targetProps: {
        size: ['small', 'medium', 'large'],
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
        withTime: [true, false],
        disableYearChange: [true, false],
        display: [DATE_PICKER_DISPLAY_TYPES.SINGLE, DATE_PICKER_DISPLAY_TYPES.DOUBLE],
    },
});

testPropsAllowedDates('DatePickerAllowedDates', {
    targetProps: {
        withTime: [true, false],
    },
    groupBy: ['testName', 'props', 'value', 'postfix'],
});

testPropsFrench('FrenchDatePicker', {
    targetProps: {
        withTime: [true, false],
    },
    groupBy: ['testName', 'props', 'value', 'postfix'],
});
