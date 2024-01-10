import { Story } from '@storybook/react/types-6-0';
import { DropdownItem, DropdownItemProps, Stack, Theme } from '@core';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import styled from '@emotion/styled';

// ToDo: Вынести на уровне проекта
declare global {
    interface Window {
        QuarX: { theme: Theme };
    }
}

const getThemeBorderSecondaryColor = () => (
    window.QuarX.theme.palette.border.secondary
);

const Frame = styled.div(() => ({
    borderRadius: 4,
    border: '1px solid',
    borderColor: getThemeBorderSecondaryColor(),
}));

const Center = styled.div(() => ({
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid',
    borderBottomColor: getThemeBorderSecondaryColor(),
}));

const Padding = styled.div({
    padding: 16,
});

export const BooleansStory: Story<DropdownItemProps> = (props) => (
    <Stack direction="column">
        <Frame>
            <Stack direction="column">
                <Center>
                    <Title size="primary">
                        disableFocus
                    </Title>
                </Center>
                <Padding>
                    <Stack direction="column">
                        <Title>false</Title>
                        <DropdownItem
                            {...props}
                            disableFocus={false}
                        />
                        <Title>true</Title>
                        <DropdownItem
                            {...props}
                            disableFocus
                        />
                    </Stack>
                </Padding>
            </Stack>
        </Frame>
        <Frame>
            <Stack direction="column">
                <Center>
                    <Title size="primary">
                        state
                    </Title>
                </Center>
                <Padding>
                    <Stack direction="column">
                        <Title>false</Title>
                        <DropdownItem
                            {...props}
                            state={false}
                        />
                        <Title>true</Title>
                        <DropdownItem
                            {...props}
                            state
                        />
                    </Stack>
                </Padding>
            </Stack>
        </Frame>
    </Stack>
);
BooleansStory.storyName = 'Boolean параметры';
BooleansStory.argTypes = excludeProp(['disableFocus', 'state']);
