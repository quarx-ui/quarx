import { Story } from '@storybook/react/types-6-0';
import { Button, QX_SIZE, RadioButton, RadioButtonProps } from '@core';
import { Fragment, useState } from 'react';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const BooleanParamsStory: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <Fragment>
            {DisplayVariantsMap({
                variants: {
                    disabled: [true],
                },
                optionTitle: {
                    isShown: false,
                },
                direction: 'vertical',
                component: RadioButton,
                componentProps: {
                    ...props,
                    checked: bool,
                    onChange: () => setBool((prev) => !prev),
                },
            })}
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

setStoryParams(BooleanParamsStory, {
    title: 'Boolean параметры',
    excludeArgs: ['disabled'],
});
