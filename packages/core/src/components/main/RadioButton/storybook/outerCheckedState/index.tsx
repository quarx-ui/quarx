import { Story } from '@storybook/react/types-6-0';
import { Button, QX_SIZE, RadioButton, RadioButtonProps } from '@core';
import { Fragment, useState } from 'react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const OuterCheckedStateStory: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <Fragment>
            <RadioButton
                name="StoryBool"
                onChange={() => {
                    setBool((prevState) => !prevState);
                }}
                checked={bool}
                {...props}
            >
                <div>
                    {bool.toString()}
                </div>
            </RadioButton>
            <Button
                onClick={() => { setBool((prevState) => !prevState); }}
                style={{ marginTop: 10 }}
                size={QX_SIZE.small}
            >
                {bool ? 'Деактивировать' : 'Активировать'}
            </Button>
        </Fragment>
    );
};

setStoryParams(OuterCheckedStateStory, {
    title: 'Внешнее управление компонентом',
});
