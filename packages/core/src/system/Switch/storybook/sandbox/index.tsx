import { Story } from '@storybook/react/types-6-0';
import { Case, Switch, SwitchProps } from '@core/src/system/Switch';
import { Button } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const SandboxStory: Story<SwitchProps> = ({ value }) => (
    <Button>
        <Switch value={value}>
            <Case value="false">
                <span>Текст при false</span>
            </Case>
            <Case value="true">
                <span>Текст при true</span>
            </Case>
        </Switch>
    </Button>
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
