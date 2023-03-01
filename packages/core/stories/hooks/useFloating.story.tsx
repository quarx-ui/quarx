import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ARRANGEMENTS, PLACEMENTS, Position, useFloating, UseFloatingProps } from '@core';
import { defineCategory } from '@core/storybook/templateParams';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

export default {
    title: STORY_PATHS.core.hooks('useFloating'),
    argTypes: {
        ...defineCategory('Основное', {
            placement: {
                description: 'Положение плавающего элемента относительно элемента привязки',
                control: {
                    type: 'select',
                    options: Object.keys(PLACEMENTS),
                },
                table: {
                    type: {
                        summary: 'Placement',
                        required: true,
                    },
                },
            },
            anchor: {
                description: 'Ссылка на элемент привязки или координаты привязки',
                control: false,
                table: {
                    type: {
                        summary: 'RefObject<HTMLElement> | Position',
                        required: true,
                    },
                },
            },
            floatingRef: {
                description: 'Ссылка на плавающий элемент',
                control: false,
                table: {
                    type: {
                        summary: 'RefObject<HTMLElement>',
                        required: true,
                    },
                },
            },
            open: {
                description: 'Отображение плавающего элемента на экране. '
                    + 'Необходимо для управления слушателями событий',
                control: {
                    type: 'boolean',
                },
                table: {
                    type: {
                        summary: 'boolean',
                        required: true,
                    },
                },
            },
            arrangement: {
                description: 'Поведение плавающего элемента на экране, основанное на css-свойстве `position`',
                control: {
                    type: 'radio',
                    options: Object.keys(ARRANGEMENTS),
                },
            },
        }),
        ...defineCategory('Модификаторы', {
            disableOffset: {
                description: 'Убрать отступ между плавающим элементом и элементом привязки',
                control: { type: 'boolean' },
                table: {
                    type: {
                        summary: 'boolean',
                    },
                },
            },
            disableFlip: {
                description: 'Отключить изменение placement при переполнении контейнера',
                control: { type: 'boolean' },
                table: {
                    type: {
                        summary: 'boolean',
                    },
                },
            },
            disableShift: {
                description: 'Отключить сдвиг плавающего элемента при переполнении контейнера',
                control: { type: 'boolean' },
                table: {
                    type: {
                        summary: 'boolean',
                    },
                },
            },
            modifiersOptions: {
                description: 'Детальная настройка модификаторов `offset`, `flip` и `shift`',
            },
            customModifiers: {
                description: 'Массив модификаторов позиции плавающего элемента',
            },
        }),
    },
    parameters: {
        actions: { disable: true },
    },
};

type UseFloatingStoryProps = Omit<UseFloatingProps, 'anchor' | 'floatingRef'>;

const defaultArgs: UseFloatingStoryProps = {
    placement: PLACEMENTS.bottom,
    arrangement: ARRANGEMENTS.absolute,
    disableOffset: false,
    disableFlip: false,
    disableShift: false,
    open: true,
};

export const Sandbox: Story<UseFloatingStoryProps> = ({
    open,
    placement,
    arrangement,
    ...restProps
}) => {
    const anchorRef = useRef<HTMLDivElement>(null);
    const floatingRef = useRef<HTMLDivElement>(null);

    const { floating } = useFloating({
        open,
        placement,
        floatingRef,
        anchor: anchorRef,
        arrangement,
        ...restProps,
    });

    useEffect(() => {
        if (!anchorRef.current) { return; }
        anchorRef.current.scrollIntoView({ block: 'center', inline: 'center' });
    }, []);

    return (
        <div
            css={{
                position: 'relative',
                width: '100%',
                height: 400,
                overflow: 'scroll',
                border: '2px solid #bdbdbd',
                borderRadius: 4,
            }}
        >

            <div
                css={{
                    width: '300%',
                    height: '300%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    ref={anchorRef}
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        width: 240,
                        height: 72,
                        borderRadius: 8,
                        border: '1px dashed #bdbdbd',
                    }}
                >
                    Anchor
                </div>
                {open && (
                    <div
                        ref={floatingRef}
                        css={{
                            position: arrangement,
                            top: floating.y,
                            left: floating.x,
                            width: 144,
                            height: 144,
                            borderRadius: 8,
                            background: 'rgba(83,21,197,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Floating
                    </div>
                )}
            </div>
        </div>
    );
};

Sandbox.args = defaultArgs;
Sandbox.parameters = {
    docs: {
        source: { type: 'code' },
    },
};

export const ManualPosition: Story<UseFloatingStoryProps> = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const floatingRef = useRef(null);

    const { floating } = useFloating({
        open: true,
        floatingRef,
        anchor: position,
        placement: 'top',
    });

    const onMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
        const { clientX, clientY } = event;
        const { x: containerX, y: containerY } = event.currentTarget.getBoundingClientRect().toJSON();

        requestAnimationFrame(() => {
            setPosition({
                x: 1 + clientX - containerX,
                y: 1 + clientY - containerY,
            });
        });
    };

    return (
        <div
            onMouseMove={onMouseMove}
            css={{
                position: 'relative',
                width: '100%',
                height: 400,
                overflow: 'hidden',
                boxShadow: '0 0 0 2px #bdbdbd',
                borderRadius: 4,
            }}
        >
            <div
                ref={floatingRef}
                css={{
                    position: 'absolute',
                    top: floating.y,
                    left: floating.x,
                    width: 144,
                    height: 144,
                    borderRadius: 8,
                    background: 'rgba(83,21,197,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Floating
            </div>
        </div>
    );
};

ManualPosition.args = defaultArgs;
ManualPosition.storyName = 'Координаты привязки';
ManualPosition.parameters = {
    docs: {
        description: {
            story: 'Плавающий элемент можно привязать к любым координатам, для этого в свойство `anchor`'
                + 'передаются координаты `x` и `y`.'
                + '<br/>'
                + 'В данном примере осуществляется привязка к координатам мыши.',
        },
    },
};
