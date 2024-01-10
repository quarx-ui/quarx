import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const SandboxStory: Story<SwitcherProps> = ({ checked: externalChecked, ...props }) => {
    const [checked, setChecked] = useState(externalChecked);

    return (
        <div style={{ width: 'max-content' }}>
            <Switcher
                {...props}
                checked={checked}
                onChange={() => setChecked(!checked)}
            >
                Switcher
            </Switcher>
        </div>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
