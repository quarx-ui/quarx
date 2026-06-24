import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { SwitcherProps } from '../../types';
import { Switcher } from '../../Switcher';

export const SandboxStory: StoryFn<SwitcherProps> = ({ checked: externalChecked, ...props }) => {
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
