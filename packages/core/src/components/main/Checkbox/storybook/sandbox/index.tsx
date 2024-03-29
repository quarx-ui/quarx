import { Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '@core';
import { useState } from 'react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SandboxStory: Story<CheckboxProps> = ({ ...props }) => {
    const [bool, setBool] = useState(false);
    return (
        <div style={{ width: 'max-content' }}>
            <Checkbox
                onChange={(e) => setBool(e.currentTarget.checked)}
                checked={bool}
                {...props}
            >
                {bool.toString()}
            </Checkbox>
        </div>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
