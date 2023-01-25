import { ChangeEventHandler, useRef, useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Button, TextField, TextFieldRefType, useBooleanState } from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import { Popup, PopupProps } from '..';

const defaultArgs = {
    anchorYOffset: 0,
    anchorXOffset: 0,
};

interface StorybookPopupProps extends PopupProps {
    anchorYOffset?: number;
    anchorXOffset?: number;
}

export default {
    title: STORY_PATHS.core.components.system('Popup'),
    component: Popup,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            anchorYOffset: { description: 'Сдвиг якорного элемента по оси Y' },
            anchorXOffset: { description: 'Сдвиг якорного элемента по оси X' },
        }),

        ...defineCategory('Container  свойства', {
            container: { description: 'Контейнер, где Portal расположит Backdrop | Paper', table: { disable: true } },
            open: { description: 'Видимость элемента ' },
            anchor: { description: 'Якорный элемент' },
            placement: { description: 'Расположение плавающего элемента ' },
            disableOffset: { description: 'Убрать отступ между floating и якорным элементами' },
            disableFlip: { description: '' },
            disableShift: { description: '' },
            modifiersOptions: { description: '' },
            customModifiers: { description: '' },
            arrangement: { description: '' },

            TransitionProps: { description: 'Анимация Paper' },
            disableTransition: { description: 'Отключение анимации Paper' },
            children: { description: 'Дочерние элементы popup', table: { disable: true } },
        }),

        ...defineCategory('Portal свойства', {
            disablePortal: { description: 'Отключить портал' },
        }),

        ...defineCategory('Backdrop свойства', {
            disableBackdrop: { description: 'Полное отключение Backdrop компонента' },
            BackdropProps: { description: 'Параметры, передаваемые Backdrop компоненту' },
        }),

        ...defineCategory('ClickAwayListener свойства', {
            onClickAway: { description: 'Функция, вызываемая при клике вне popup', table: { disable: true } },
            ClickAwayListenerProps: { description: 'Параметры, передаваемые ClickAwayListener компоненту' },
        }),

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<StorybookPopupProps> = ({
    anchorYOffset = 0,
    anchorXOffset = 0,
    ...props
}) => {
    const [text, setText] = useState<string>('');
    const { state, setTrue, setFalse } = useBooleanState(false);
    const anchor = useRef<HTMLButtonElement>(null);

    const setValue: ChangeEventHandler<TextFieldRefType> = (event) => (
        setText(event.target.value)
    );

    return (
        <StoryDarkerContainer>
            <div>
                <span>{text}</span>
                <Button
                    ref={anchor}
                    type="outlined"
                    onClick={setTrue}
                    css={{
                        marginTop: anchorYOffset,
                        marginLeft: anchorXOffset,
                    }}
                >
                    Показать
                </Button>
                <Popup
                    {...props}
                    open={state}
                    anchor={anchor}
                    onClickAway={setFalse}
                >
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 150,
                            gap: 12,
                        }}
                    >
                        <TextField
                            value={text}
                            onChange={setValue}
                            css={{ width: '100%' }}
                        />
                        <Button onClick={setFalse}>
                            Закрыть
                        </Button>
                    </div>
                </Popup>
            </div>
        </StoryDarkerContainer>
    );
};

export const Sandbox = Template;
Sandbox.storyName = 'Компонент';
Sandbox.args = defaultArgs;
