import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { If, IfProps } from '@core/components/system/If';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const Div = styled('div')({
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
});

export const SandboxStory: Story<IfProps> = ({ ...props }) => (
    <Div>
        <If {...props}>
            <span>Hello, World!</span>
        </If>
    </Div>
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
