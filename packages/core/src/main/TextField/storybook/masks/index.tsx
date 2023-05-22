import InputMask from 'react-input-mask';
import { PatternFormat } from 'react-number-format';
import { Story } from '@storybook/react/types-6-0';
import { TextFieldProps } from '@core/src/main/TextField/types';
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
        />
    </Grid>
);

MasksStory.storyName = 'Использование с масками';
MasksStory.parameters = {
    docs: {
        description: { story: masksDescription },
        source: {
            code: `
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
/>
            `,
        },
    },
};
