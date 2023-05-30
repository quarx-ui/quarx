import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import {
    Button,
    Dropdown,
    DropdownProps,
    QX_SIZE,
    Stack,
    useBooleanState,
} from '@core';
import { Fragment, useRef } from 'react';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import styled from '@emotion/styled';
import { createDropdownChildren } from '../template';

const Divider = styled.div(() => ({
    marginTop: 12,
    borderBottom: '1px solid',
    borderBottomColor: window.QuarX.theme.palette.border.main,
}));

const useSizeState = () => {
    const {
        state,
        setTrue,
        setFalse,
    } = useBooleanState(false);
    const ref = useRef<HTMLButtonElement>(null);

    return {
        ref,
        state,
        setTrue,
        setFalse,
    };
};

export const SizesStory: Story<DropdownProps> = ({
    open,
    size,
    ...props
}) => {
    const small = useSizeState();
    const medium = useSizeState();
    const large = useSizeState();

    return (
        <Stack direction="column">
            <Stack direction="column">
                <Title size="primary">{QX_SIZE.small}</Title>
                <Fragment>
                    <Button
                        ref={small.ref}
                        size="small"
                        type="outlined"
                        color="secondary"
                        onClick={small.setTrue}
                    >
                        Dropdown
                    </Button>
                    <Dropdown
                        {...props}
                        size="small"
                        open={open || small.state}
                        anchor={small.ref}
                        onClickAway={small.setFalse}
                    >
                        {createDropdownChildren({
                            size,
                            ...props,
                        })}
                    </Dropdown>
                </Fragment>
            </Stack>
            <Divider />
            <Stack direction="column">
                <Title size="primary">
                    {QX_SIZE.medium}
                </Title>
                <Fragment>
                    <Button
                        ref={medium.ref}
                        size="medium"
                        type="outlined"
                        color="secondary"
                        onClick={medium.setTrue}
                    >
                        Dropdown
                    </Button>
                    <Dropdown
                        {...props}
                        size="medium"
                        open={open || medium.state}
                        anchor={medium.ref}
                        onClickAway={medium.setFalse}
                    >
                        {createDropdownChildren({
                            size,
                            ...props,
                        })}
                    </Dropdown>
                </Fragment>
            </Stack>
            <Divider />
            <Stack direction="column">
                <Title size="primary">
                    {QX_SIZE.large}
                </Title>
                <Fragment>
                    <Button
                        ref={large.ref}
                        size="large"
                        type="outlined"
                        color="secondary"
                        onClick={large.setTrue}
                    >
                        Dropdown
                    </Button>
                    <Dropdown
                        {...props}
                        size="large"
                        open={open || large.state}
                        anchor={large.ref}
                        onClickAway={large.setFalse}
                    >
                        {createDropdownChildren({
                            size,
                            ...props,
                        })}
                    </Dropdown>
                </Fragment>
            </Stack>
        </Stack>
    );
};

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
