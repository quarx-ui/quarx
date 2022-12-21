import { Fragment, useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { QX_DEVICE, QxDevice, useMedia, useTheme } from '@core';
import styled from '@emotion/styled';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { deviceToBreakpoint } from '../../styles/engine/theme/hooks/useMedia/helpers';

export default {
    title: STORY_PATHS.core.hooks('useMedia'),
    argTypes: {
        stringQuery: {
            description: 'Строковое значение медиа-запроса, согласно спецификации css',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        device: {
            description: 'Тип устройства, который будет преобразован '
                + 'в соответствующий ему breakpoint (см. тиблицу "Типы устройств")',
            control: {
                options: Object.keys(QX_DEVICE),
                type: 'select',
            },
            table: {
                type: { summary: 'QxDevice' },
            },
        },
        callback: {
            description: 'Функция, которая принимает breakpoints и возвращает строку с медиа-запросом',
            table: {
                type: { summary: '(breakpoints: Breakpoints) => string' },
            },
        },
    },
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            source: {
                type: 'code',
            },
        },
    },
};

// eslint-disable-next-line no-undef
const throttleWindowEvent = (eventName: keyof WindowEventMap, customEventName: string) => {
    let running = false;
    const func = () => {
        if (running) { return; }
        running = true;
        requestAnimationFrame(() => {
            window.dispatchEvent(new CustomEvent(customEventName));
            running = false;
        });
    };
    window.addEventListener(eventName, func);
    return () => window.removeEventListener(eventName, func);
};

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.visualViewport.width);

    useEffect(() => {
        const cancelThrottle = throttleWindowEvent('resize', 'optimizedResize');

        const handleScreenResize = () => setScreenSize(window.visualViewport.width);
        window.addEventListener('optimizedResize', handleScreenResize);
        return () => {
            window.removeEventListener('optimizedResize', handleScreenResize);
            cancelThrottle();
        };
    }, []);

    return screenSize;
};

type SandboxArgs = {
    stringQuery: string;
    device: QxDevice;
}

const Grid = styled('div')(({ columns }: { columns: number | string }) => ({
    display: 'inline-grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    gridGap: 16,
    alignItems: 'center',
}));

const Code = styled('code')({
    padding: '2px 4px',
    borderRadius: 3,
    backgroundColor: 'rgba(9, 30, 66, 0.04)',
    width: 'fit-content',
});

const GridHead = styled('div')({
    fontWeight: 'bold',
});

export const Sandbox: Story<SandboxArgs> = ({
    stringQuery = '(min-width:600px)',
    device = QX_DEVICE.mobile,
}) => {
    const matchString = useMedia(stringQuery);
    const matchDevice = useMedia(device);
    const matchCallback = useMedia((breakpoints) => breakpoints.between('S', 'L'));

    /* Кастомный хук, не является частью библиоткеки.
    Вызван в целях отображения ширины текущего visualViewport */
    const screenSize = useScreenSize();

    const useMediaPreview = (value: string) => `useMedia(${value})`;

    return (
        <Grid columns={2}>
            <GridHead>Параметр</GridHead>
            <GridHead>Значение</GridHead>

            <div>Размер области отображения</div>
            <div>{screenSize}</div>

            <Code>{useMediaPreview(`'${stringQuery}'`)}</Code>
            <div>{`${matchString}`}</div>

            <Code>{useMediaPreview(`'${device}'`)}</Code>
            <div>{`${matchDevice}`}</div>

            <Code>{useMediaPreview("(breakpoints) => breakpoints.between('S', 'L')")}</Code>
            <div>{`${matchCallback}`}</div>
        </Grid>
    );
};

export const Device: Story = () => {
    const { breakpoints } = useTheme();

    return (
        <Grid columns="1fr 1fr 2fr">
            <GridHead>Тип устройства</GridHead>
            <GridHead>Breakpoint</GridHead>
            <GridHead>Медиа-запрос</GridHead>

            {Object.values(QX_DEVICE)
                .map((device) => (
                    <Fragment>
                        <Code>{device}</Code>
                        <Code>{`breakpoints.only('${deviceToBreakpoint[device]}')`}</Code>
                        <Code>{breakpoints.only(deviceToBreakpoint[device])}</Code>
                    </Fragment>
                ))}
        </Grid>
    );
};

Device.storyName = 'Типы устройств';

Sandbox.args = {
    stringQuery: '(min-width:600px)',
    device: QX_DEVICE.mobile,
};
