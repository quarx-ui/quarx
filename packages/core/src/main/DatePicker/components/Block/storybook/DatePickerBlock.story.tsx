import { STORYBOOK_VIEWPORTS } from '@core/storybook/constants';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
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
    title: STORY_PATHS.core.components.main('DatePicker/block'),
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
    parameters: { actions: { disable: true }, ...STORYBOOK_VIEWPORTS },
};

export { Sandbox } from './sandbox';
export { SizesAndDisplayTypesStory } from './sizes-and-display-types';
export { FrenchDatePickerStory } from './french-datepicker';
export { DisableYearStory } from './disable-year';
export { BorderRadiusOnVariousTypesStory } from './border-radius-on-various-types';
export { AllowedDatesStory } from './allowed-dates';
