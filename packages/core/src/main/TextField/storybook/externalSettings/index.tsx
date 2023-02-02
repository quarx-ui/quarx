import { Fragment, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button } from '@core';
import { TextFieldProps } from '@core/src/main/TextField/types';
import { createStoryDescription } from '@core/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { TextField } from '../..';
import { Grid } from '../utils';
import externalSettingsDescription from './description.md';

export const ExternalSettingsStory: Story<TextFieldProps> = (props) => {
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState<boolean | undefined>(false);
    const [filled, setFilled] = useState<boolean | undefined>(false);
    const [errorText, setErrorText] = useState<string | undefined>();

    const clearInput = () => {
        setValue('');
    };
    const focus = () => {
        setFocused((prev) => !prev);
    };
    const fill = () => {
        setFilled((prev) => !prev);
    };
    const showError = () => {
        setErrorText((prev) => (!prev ? 'Какая-то ошибка' : undefined));
    };

    return (
        <Fragment>
            <Grid>
                <TextField {...props} value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={clearInput}>Очистить содержимое</Button>
            </Grid>
            <Grid>
                <TextField {...props} focused={focused} />
                <Button onClick={focus}>
                    {`${focused ? 'Отключить' : 'Включить'} фокус`}
                </Button>
                <Button onClick={() => setFocused(undefined)}>
                    undefined
                </Button>
            </Grid>
            <Grid>
                <TextField {...props} filled={filled} />
                <Button onClick={fill}>
                    {`${filled ? 'Отключить' : 'Включить'} заполненность`}
                </Button>
                <Button onClick={() => setFilled(undefined)}>
                    undefined
                </Button>
            </Grid>
            <Grid>
                <TextField {...props} errorText={errorText} />
                <Button onClick={showError}>
                    {`${errorText ? 'Скрыть' : 'Показать'} внешнюю ошибку`}
                </Button>
            </Grid>
        </Fragment>
    );
};

ExternalSettingsStory.storyName = 'Внешнее управление';
ExternalSettingsStory.argTypes = excludeProp(['errorText', 'focused', 'filled', 'leftIconShown', 'rightIconShown']);
ExternalSettingsStory.parameters = createStoryDescription(externalSettingsDescription);