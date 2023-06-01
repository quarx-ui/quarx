import { Story } from '@storybook/react/types-6-0';
import { Button, Dropdown, DropdownProps, Stack, useBooleanState } from '@core';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { excludeProp } from '@core/storybook/templateParams';
import styled from '@emotion/styled';
import { Fragment, useRef } from 'react';
import { CustomContent } from '@core/storybook/components';
import { createDropdownChildren } from '../template';

const Divider = styled.div(() => ({
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 4,
    borderBottom: '1px solid',
    borderBottomColor: window.QuarX.theme.palette.border.secondary,
}));

const useCustomizationState = () => {
    const [state, { setTrue, setFalse }] = useBooleanState(false);
    const ref = useRef<HTMLButtonElement>(null);
    return {
        ref,
        state,
        setTrue,
        setFalse,
    };
};

export const CustomizationStory: Story<DropdownProps> = (props) => {
    const headerCustom = useCustomizationState();
    const bodyCustom = useCustomizationState();
    const footerCustom = useCustomizationState();
    const othersCustom = useCustomizationState();

    const createTemplate = (
        {
            size,
            ...templateProps
        }: DropdownProps,
        state: ReturnType<typeof useCustomizationState>,
    ) => (
        <Fragment>
            <Button
                ref={state.ref}
                size={size}
                type="outlined"
                color="secondary"
                onClick={state.setTrue}
            >
                Dropdown
            </Button>
            <Dropdown
                {...templateProps}
                size={size}
                open={templateProps.open || state.state}
                anchor={state.ref}
                onClickAway={state.setFalse}
            >
                {createDropdownChildren({
                    size,
                    ...templateProps,
                })}
            </Dropdown>
        </Fragment>
    );

    return (
        <Stack direction="column" spacing="8px">
            <Title size="primary">
                Пользовательские настройки шапки, тела, подвала
            </Title>
            <Title>
                Пользовательская шапка
            </Title>
            {createTemplate(
                {
                    ...props,
                    header: <CustomContent />,
                },
                headerCustom,
            )}
            <Divider />
            <Title>
                Пользовательское тело
            </Title>
            {createTemplate(
                {
                    ...props,
                    title: 'Свое тело компонента',
                    children: <CustomContent />,
                },
                bodyCustom,
            )}
            <Divider />
            <Title>
                Пользовательский подвал
            </Title>
            {createTemplate(
                {
                    ...props,
                    title: 'Свой подвал',
                    footer: <CustomContent />,
                },
                footerCustom,
            )}
            <Divider />
            <Title>
                Без title, без searchable, без footer
            </Title>
            {createTemplate(
                {
                    ...props,
                    title: '',
                    searchable: false,
                    buttonManagement: false,
                },
                othersCustom,
            )}
        </Stack>
    );
};
CustomizationStory.storyName = 'Пользовательские настройки';
CustomizationStory.argTypes = excludeProp(['header', 'children', 'footer']);
