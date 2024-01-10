import { STORYBOOK_VIEWPORTS } from '@quarx-ui/core/storybook/constants';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { DATE_PICKER_ARG_TYPES } from './utils';
import { DatePickerStoryType } from './types';
import { DatePickerBlock,
    DATE_PICKER_DISPLAY_TYPES,
} from '..';

const defaultArgs: DatePickerStoryType = {
    display: DATE_PICKER_DISPLAY_TYPES.SINGLE,
    borderRadius: 'small',
    size: 'small',
    disableYearChanging: true,
    withTime: true,
};

export default {
    title: STORY_PATHS.core.components.experimental('DatePicker/block'),
    component: DatePickerBlock,
    args: defaultArgs,
    argTypes: {
        selected: {
            table: {
                type: {
                    summary: 'SelectedDates',
                    detail: 'PickerSelectedDate: Date | undefined \n'
                        + 'PeriodSelectedDates: {\n'
                        + '    start?: Date;\n'
                        + '    end?: Date; \n'
                        + '}',
                },
            },
            control: { type: 'none' },
        },
        onChange: {},
        ...DATE_PICKER_ARG_TYPES,
    },
    parameters: STORYBOOK_VIEWPORTS,
};

export { Sandbox } from './sandbox';
