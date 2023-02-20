import { ThemeProvider } from '@emotion/react';
import { Description, Heading, Source, Subheading, Title } from '@storybook/addon-docs';
import { ComponentType, Fragment, ReactChild, useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { createTheme, makeStyles, Modal, PaletteType, Tabs, TextField, valuesAsKeysFromArray } from '@core';
import { noCase, pascalCase } from 'change-case';
import { SourceTabs } from '../../../.storybook/custom-components/SourceTabs';
import { ThemingAddonAPI } from '../../../.storybook/addons/theming/store';
import { name as packageName } from '../package.json';
import { allIcons, groupByName, groupBySize } from './groups';

const code = {
    install: {
        npm: `npm i ${packageName}`,
        yarn: `yarn add ${packageName}`,
    },
    color: {
        wrapper: {
            instance: 'const ColorWrapper = styled(\'div\')({\n'
                + '    color: \'#f7f7f7\',\n'
                + '});',
            usage: '<ColorWrapper>\n'
                + '    <ChatBubbleIcon />\n'
                + '    <EqualizerIcon />\n'
                + '</ColorWrapper>',
        },
        icon: {
            instance: 'const ArrowGraphStyled = styled(ArrowGraphIcon)({\n'
                + '    color: \'#f7f7f7\',\n'
                + '});',
            usage: '<ArrowGraphStyled />',
        },
    },
};

export default {
    title: 'Icons/Icons',
    parameters: {
        viewMode: 'docs',
        controls: { disable: true },
        actions: { disable: true },
        design: { disable: true },
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            page: (): JSX.Element => {
                const themeType = ThemingAddonAPI.getLocallyStoredType();
                // const theme = ThemingAddonAPI.getLocallyStoredTheme();

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const theme = useMemo(() => {
                    const quarXTheme = createTheme({
                        palette: { type: themeType as PaletteType ?? 'light' },
                    });
                    ThemingAddonAPI.setWindowTheme(quarXTheme);
                    return quarXTheme;
                }, [themeType]);

                return (
                    <ThemeProvider theme={theme}>
                        <div>
                            <Title>
                                prime-ui-kit-icons
                            </Title>
                            <Description>
                                Пакет с иконками, используемыми в дизайн-системе.
                            </Description>
                            <Subheading>
                                Установка пакета
                            </Subheading>
                            <SourceTabs
                                sources={{
                                    npm: {
                                        code: code.install.npm,
                                        language: 'shell',
                                    },
                                    yarn: {
                                        code: code.install.yarn,
                                        language: 'shell',
                                    },
                                }}
                            />
                            <Subheading>
                                Стилизация
                            </Subheading>
                            <ChangeColor />
                            <Heading>
                                Галерея
                            </Heading>
                            <Icons />
                        </div>
                    </ThemeProvider>
                );
            },
        },
    },
};

const cellSize = 80;

const useStyles = makeStyles(({ palette, elevations, transitions }) => ({
    root: {
        color: palette.text.main,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`,
        alignItems: 'center',
        justifyContent: 'center',
        gridGap: 8,
    },
    cell: {
        all: 'unset',
        width: cellSize,
        height: cellSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        flexDirection: 'column',
        borderRadius: 4,
        transition: transitions.create(['box-shadow', 'transform', 'background-color']),

        '&:hover': {
            cursor: 'pointer',
            ...elevations.main.medium,
            transform: 'scale(1.05)',
            backgroundColor: palette.type === 'dark' ? palette.background.container.hover : undefined,
        },

        '&:focus-visible': {
            boxShadow: `0 0 0 2px ${palette.border.focus.main}`,
        },
    },
    active: {
        backgroundColor: palette.type === 'dark' ? palette.background.container.hover : undefined,
        ...elevations.main.medium,
        transform: 'scale(1.05)',
    },
    search: {
        width: '100%',
        marginBottom: 32,
    },
    textCenter: {
        textAlign: 'center',
    },
    iconInfo: {
        display: 'flex',
        marginBottom: 24,
        alignItems: 'center',
    },
    iconPreview: {
        width: cellSize,
        height: cellSize,
        marginRight: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
            `linear-gradient(45deg, ${palette.background.container.hover} 25%, transparent 25%),
            linear-gradient(-45deg, ${palette.background.container.hover} 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, ${palette.background.container.hover} 75%),
            linear-gradient(-45deg, transparent 75%, ${palette.background.container.hover} 75%)`,
        backgroundSize: ' 20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    },
    iconMeta: {
        maxWidth: 200,
        flex: 1,
        '& .sbdocs-p': {
            margin: 0,
        },
    },
    iconMetaRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '&:not(:last-of-type)': {
            borderBottom: `1px solid ${palette.background.container.hover}`,
        },
    },
}), { name: 'AllIcons' });

export const Icons: Story = () => {
    interface IconMetadata {
        size: string;
        params: string[];
        type: string;
        style: string;
        name: string;
        keywords: string[];
        Component: ComponentType;
    }

    interface Selected {
        name: string;
        params: string[];
    }

    const tabs = valuesAsKeysFromArray(['component', 'svg'] as const);
    type Tab = keyof typeof tabs;

    const styles = useStyles();

    // eslint-disable-next-line react/button-has-type
    const Cell = (props: JSX.IntrinsicElements['button']) => <button css={styles.cell} {...props} />;
    const Grid = (props: JSX.IntrinsicElements['div']) => <div css={styles.grid} {...props} />;

    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState<Selected>({ name: '', params: [] });
    const [currentTab, setCurrentTab] = useState<Tab>(tabs.component);
    const [searchText, setSearchText] = useState('');

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const nameToComponent = (name: string) => (
        `${pascalCase(name)}Icon`
    );

    const getIconPath = ({ name, params }: {name: string; params: string[]}) => (
        [name, ...params].join('/')
    );

    const allIconsMap = useMemo(() => (
        Object.entries(allIcons).reduce((acc, [fullName, Component]) => {
            const [name, size, type, style] = fullName.split('/');
            acc[fullName] = {
                name,
                size,
                type,
                style,
                params: [size, type, style],
                keywords: name.split('-').map((word) => word.toLowerCase()),
                Component,
            };
            return acc;
        }, {} as Record<string, IconMetadata>)
    ), []);

    const filterIcons = useCallback((icons: IconMetadata[]) => {
        if (!searchText) { return icons; }

        const noCaseNoSpace = (text: string) => (
            noCase(text)
                .toLowerCase()
                .replace(/ /g, '')
        );

        const searchWords = noCase(searchText).toLowerCase().split(' ');
        const formattedSearchText = noCaseNoSpace(searchText);

        return icons
            .filter(({ name, params, keywords }) => {
                // eslint-disable-next-line no-restricted-syntax
                for (const word in searchWords) {
                    if (keywords.includes(word)) { return true; }
                }

                return (
                    noCaseNoSpace(name).includes(formattedSearchText)
                    || params.some((p) => p.includes(formattedSearchText))

                );
            });
    }, [searchText]);

    const renderVariants = () => {
        const variants = groupByName[selected.name];
        if (!variants?.length || variants?.length < 2) { return null; }
        return (
            <Fragment>
                <Subheading>
                    Варианты
                </Subheading>
                <Grid>
                    {variants
                        .map((path) => allIconsMap[getIconPath({ name: selected.name, params: path.split('/') })])
                        .map(({ name, params, Component }) => {
                            const isSelected = name === selected.name
                                && selected.params.join('') === params.join('');

                            return (
                                <Cell
                                    css={[isSelected && styles.active]}
                                    title={params // TODO использовать Tooltip
                                        .filter((p) => !selected.params.includes(p))
                                        .join(' ')}
                                    key={params.join(' ')}
                                    onClick={() => setSelected({
                                        name,
                                        params,
                                    })}
                                >
                                    <Component />
                                </Cell>
                            );
                        })}
                </Grid>
            </Fragment>
        );
    };

    const fromPackage = (path: string) => (
        `${packageName}/${path}`
    );

    const getComponentImport = ({ params, name }: Selected): string => (
        `import { ${nameToComponent(name)} } from '${fromPackage(getIconPath({ name, params }))}'`
    );

    const getSvgImport = ({ params, name }: Selected) => (
        `import ${pascalCase(name)}Svg from '${fromPackage(getIconPath({ name, params }))}/${name}.svg'`
    );

    const examples = {
        [tabs.component]: (
            <Fragment>
                <Source
                    dark
                    language="tsx"
                    code={getComponentImport(selected)}
                />
                <Source
                    dark
                    language="tsx"
                    code={`<${nameToComponent(selected.name)} />`}
                />
            </Fragment>
        ),
        [tabs.svg]: (
            <Fragment>
                <Source
                    dark
                    language="tsx"
                    code={getSvgImport(selected)}
                />
                <Source
                    dark
                    language="tsx"
                    code={`<img src={${pascalCase(selected.name)}Svg} alt="${noCase(selected.name)}" />`}
                />
            </Fragment>
        ),
    };

    const renderIconInfo = () => {
        const selectedIcon = allIconsMap[getIconPath(selected)];
        if (!selectedIcon) { return null; }

        const { size, type, style } = selectedIcon;

        return (
            <div css={styles.iconInfo}>
                <div css={styles.iconPreview}>
                    <selectedIcon.Component />
                </div>
                <div css={styles.iconMeta}>
                    <div css={styles.iconMetaRow}>
                        <div>Размер</div>
                        <div>{size}</div>
                    </div>
                    <div css={styles.iconMetaRow}>
                        <div>Тип</div>
                        {type}
                    </div>
                    <div css={styles.iconMetaRow}>
                        <div>Стиль</div>
                        <div>{style}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div css={styles.root}>
            <TextField
                css={styles.search}
                label="Поиск"
                value={searchText}
                onChange={({ target: { value } }) => setSearchText(value)}
            />
            {Object.entries(groupBySize).map(([size, icons]) => {
                const filteredIcons = filterIcons(icons.map((name) => allIconsMap[name]));
                if (!filteredIcons.length) { return null; }
                return (
                    <Fragment>
                        <div css={styles.textCenter}>
                            <Subheading>
                                {size}
                            </Subheading>
                        </div>
                        <Grid>
                            {filteredIcons.map((icon) => (
                                <Cell
                                    title={noCase(icon.name)}
                                    key={`${icon.params}/${icon.name}`}
                                    onClick={() => {
                                        setSelected(icon);
                                        openModal();
                                    }}
                                >
                                    <icon.Component />
                                </Cell>
                            ))}
                        </Grid>
                    </Fragment>
                );
            })}
            <Modal
                open={modalOpen}
                onClose={closeModal}
                title={noCase(selected.name)}
                body={(
                    <Fragment>
                        {renderIconInfo()}
                        <Subheading>
                            Использование
                        </Subheading>
                        <Tabs
                            type="default"
                            items={[
                                { label: 'React-компонент', value: tabs.component },
                                { label: 'SVG', value: tabs.svg },
                            ]}
                            value={currentTab}
                            onSetValue={({ value }) => setCurrentTab(value as Tab)}
                        />
                        {examples[currentTab]}
                        {renderVariants()}
                    </Fragment>
                )}
            />
        </div>
    );
};

const ChangeColor: Story = () => {
    const tabs = valuesAsKeysFromArray(['wrapper', 'icon'] as const);
    type Tab = keyof typeof tabs;

    const [currentTab, setCurrentTab] = useState<Tab>(tabs.wrapper);

    const examples: Record<Tab, ReactChild> = {
        [tabs.wrapper]: (
            <Fragment>
                <Source
                    dark
                    language="tsx"
                    code={code.color.wrapper.instance}
                />
                <Source
                    dark
                    language="tsx"
                    code={code.color.wrapper.usage}
                />
            </Fragment>
        ),
        [tabs.icon]: (
            <Fragment>
                <Source
                    dark
                    language="tsx"
                    code={code.color.icon.instance}
                />
                <Source
                    dark
                    language="tsx"
                    code={code.color.icon.usage}
                />
            </Fragment>
        ),
    };

    return (
        <div>
            <Description
                markdown={`Все одноцветные иконки наследуют текущий цвет текста через свойство \`currentColor\`. 
                Поэтому для стилизации иконки достаточно изменить css-свойство \`color\` любым удобным способом. 
                Ниже продемонстрирован пример стилизации через функцию \`styled\` из \`emotion\`:`}
            />
            <Tabs
                type="default"
                items={[
                    { label: 'Через обертку', value: tabs.wrapper },
                    { label: 'Напрямую', value: tabs.icon },
                ]}
                value={currentTab}
                onSetValue={({ value }) => setCurrentTab(value as Tab)}
            />
            {examples[currentTab]}
        </div>
    );
};

ChangeColor.storyName = 'Стилизация';
