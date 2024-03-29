import InputMask from 'react-input-mask';
import { PatternFormat } from 'react-number-format';
import { Story } from '@storybook/react/types-6-0';
import { TextFieldProps } from '@core/components/main/TextField/types';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { TextField } from '../..';
import { Grid } from '../utils';
import masksDescription from './description.md';

export const MasksStory: Story<TextFieldProps> = () => (
    <Grid>
        <InputMask mask="9999 9999 9999 9999" maskChar="*">
            {(inputProp: TextFieldProps) => <TextField label="Text Field" {...inputProp} />}
        </InputMask>
        <PatternFormat
            format="#### #### #### ####"
            mask="*"
            customInput={TextField}
            label="Text Field"
            inputProps={{
                inputMode: 'numeric', // этот пропс обязателен! иначе на мобилках не будет работать
            }}
        />
    </Grid>
);

const sourceCode = `
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

<InputMask mask="9999 9999 9999 9999" maskChar="*">
    {(inputProp: TextFieldProps) => (
        <TextField
            label="Text Field"
            {...inputProp}
        />
    )}
</InputMask>

<NumberFormat
    format="#### #### #### ####"
    mask="*"
    customInput={TextField}
    label="Text Field"
/>`;

setStoryParams(MasksStory, {
    title: 'Использование с масками',
    description: masksDescription,
    code: sourceCode,
});
