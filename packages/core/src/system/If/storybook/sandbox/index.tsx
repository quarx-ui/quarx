import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { If, IfProps } from '@core/src/system/If';

const Div = styled('div')({
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
});

const Template: Story<IfProps> = ({ ...props }) => (
    <Div>
        <If {...props}>
            <span>Hello, World!</span>
        </If>
    </Div>
);

export const SandboxStory = Template.bind({});
SandboxStory.storyName = 'Компонент';
