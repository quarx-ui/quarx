import { FC, useEffect, useRef, useState } from 'react';
import { Button, PaletteType, TextField, transitions } from '@kit';
import { usePropsContext } from '@e2e/render-utils/usePropsContext';
import { INPUT_PROPS_ID } from '@e2e/constants';

export const InputForProps: FC = () => {
    const { setProps } = usePropsContext() ?? {};
    const [value, setValue] = useState('');
    const trigger = () => setProps?.(value);

    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.onkeydown = ({ key, metaKey }: KeyboardEvent) => {
            if (key === 'Enter' && metaKey) {
                if (rootRef.current && inputRef.current) {
                    rootRef.current.style.zIndex = '9999';
                    inputRef.current.focus();
                }

                return;
            }

            if (key === 'Escape') {
                if (rootRef.current && inputRef.current) {
                    rootRef.current.style.zIndex = 'unset';
                    inputRef.current.blur();
                }
            }
        };

        return () => {
            window.onkeydown = null;
        };
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 10,
            }}
            ref={rootRef}
        >
            <TextField
                size="small"
                value={value}
                onChange={({ currentTarget }) => setValue(currentTarget.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        trigger();
                    }
                }}
                inputRef={inputRef}
                spellCheck={false}
                inputProps={{
                    id: INPUT_PROPS_ID,
                }}
                styles={{
                    root: {
                        flexGrow: 1,
                    },
                }}
            />
            <Button
                size="xSmall"
                color="secondary"
                onClick={trigger}
                styles={{
                    root: {
                        opacity: !value ? 0 : 1,
                        transition: transitions.create(['opacity', 'background-color']),
                    },
                }}
            >
                Применить
            </Button>
        </div>
    );
};
