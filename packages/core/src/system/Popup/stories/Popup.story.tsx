import { ChangeEventHandler, useRef, useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { Button, TextField, TextFieldRefType, useBooleanState } from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import { Popup, PopupProps, POPUP_PAPER_REFERENCE } from '..';

interface StorybookPopupProps extends PopupProps {
    anchorYOffset?: number;
    anchorXOffset?: number;
}

const defaultArgs: Partial<StorybookPopupProps> = {
    anchorYOffset: 0,
    anchorXOffset: 0,
    hidden: false,
    disableTransition: false,
    disablePortal: false,
    disableBackdrop: false,
    open: false,
    reference: POPUP_PAPER_REFERENCE.window,
};

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
            modifiersOptions: { description: 'Параметры модификаторов плавающего элемента' },
            customModifiers: { description: 'Пользовательские модификаторы координат плавающего элемента' },
            disableOffset: { description: 'Убрать отступ между floating и якорным элементами' },
            disableShift: { description: 'Отключение ограничения отрисовки только внутри видимой области' },
            disableFlip: {
                description: [
                    'Отключение переворота при',
                    'отсутствии свободного места',
                    'для корректной отрисовки',
                ].join(' '),
            },
            reference: {
                description: [
                    'Позиционирование контейнера.',
                    'При relative необходимо указать position: relative,',
                    'относительно которого будут отсчитываться координаты объекта',
                ].join(' '),
            },

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
            <div style={{ position: 'relative' }}>
                <span>{text}</span>
                <Button
                    ref={anchor}
                    type="outlined"
                    onClick={setTrue}
                    style={{
                        marginTop: anchorYOffset,
                        marginLeft: anchorXOffset,
                    }}
                >
                    Показать
                </Button>
                <span style={{ display: 'block', marginTop: 8 }}>
                    Для тестирования relative используйте disablePortal.
                    Внешний div проставлен в position: relative
                </span>
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
