import { ChangeEventHandler, useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Button, Popup, TextField, TextFieldRefType, useBooleanState } from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import { StorybookPopupProps } from '../types';

export const SandboxStory: Story<StorybookPopupProps> = ({
    anchorYOffset = 0,
    anchorXOffset = 0,
    ...props
}) => {
    const [text, setText] = useState<string>('');
    const [state, { setTrue, setFalse }] = useBooleanState(false);
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
                    style={{
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
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 150,
                            gap: 12,
                        }}
                    >
                        <TextField
                            value={text}
                            onChange={setValue}
                            style={{ width: '100%' }}
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

SandboxStory.storyName = 'Компонент';
