import { Description, Source, Subheading, Title, Heading } from '@storybook/addon-docs';
import React, { FC, ReactChild, useCallback, useMemo, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { makeStylesKit, ModalWindow, styledKit, Tabs, TextField, valuesAsKeysFromArray, withStylesKit } from '@core';
import { noCase, pascalCase } from 'change-case';
import { SourceTabs } from '../../../.storybook/custom-components/SourceTabs';
import { name as packageName } from '../package.json';
import { allIcons, groupByName, groupBySize } from './groups';

const code = {
    install: {
        npm: 'npm i @sber-sberx-prime/prime-ui-kit-icons',
        yarn: 'yarn add @sber-sberx-prime/prime-ui-kit-icons',
    },
    color: {
        wrapper: {
            instance: 'const ColorWrapper = styledKit(\'div\')({\n'
                + '    color: \'#f7f7f7\',\n'
                + '});',
            usage: '<ColorWrapper>\n'
                + '    <ChatBubbleIcon />\n'
                + '    <EqualizerIcon />\n'
                + '</ColorWrapper>',
        },
        icon: {
            instance: 'const ArrowGraphStyled = styledKit(ArrowGraphIcon)({\n'
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
            page: (): JSX.Element => (
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
            ),
        },
    },
};

const cellSize = 80;

const Grid = styledKit('div')({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`,
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: 8,
}, { name: 'Grid' });

const Cell = styledKit('div')({
    width: cellSize,
    height: cellSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    flexDirection: 'column',
    borderRadius: 4,
    transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',

    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.05)',
    },
}, { name: 'Cell' });

const ModalStyled = styledKit(ModalWindow)({
    '& .MuiDialog-paperWidthSm': {
        width: 900,
        maxWidth: 900,
    },
});

const TabsStyled = withStylesKit({
    root: {
        '& $item': {
            padding: 0,
        },
    },
    fadeRoot: {
        paddingLeft: 0,
    },
    item: {},
})(Tabs);

const useStyles = makeStylesKit({
    search: {
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
            'linear-gradient(45deg, #f1f1f1 25%, transparent 25%),'
            + 'linear-gradient(-45deg, #f1f1f1 25%, transparent 25%),'
            + 'linear-gradient(45deg, transparent 75%, #f1f1f1 75%),'
            + 'linear-gradient(-45deg, transparent 75%, #f1f1f1 75%)',
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
    },
}, { name: 'AllIcons' });

export const Icons: Story = () => {
    interface IconMetadata {
        size: string,
        params: string,
        name: string,
        keywords: string[],
        Component: FC,
    }

    interface Selected {
        name: string,
        params: string
    }

    const tabs = valuesAsKeysFromArray(['component', 'svg'] as const);
    type Tab = keyof typeof tabs;

    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState<Selected>({ name: '', params: '' });
    const [currentTab, setCurrentTab] = useState<Tab>(tabs.component);
    const [searchText, setSearchText] = useState('');

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const nameToComponent = (name: string) => (
        `${pascalCase(name)}Icon`
    );

    const getSize = (path: string) => path.split('/')[0];

    const getIconPath = ({ name, params }: {name: string, params: string}) => (
        `${name}/${params}`
    );

    const allIconsMap = useMemo(() => (
        allIcons.reduce((acc, [name, params]) => {
            acc[getIconPath({ name, params })] = {
                size: getSize(params),
                params,
                name,
                keywords: name.split('-').map((word) => word.toLowerCase()),
                // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
                Component: require(`../src/${getIconPath({ name, params })}`)[`${nameToComponent(name)}`],
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
                    noCaseNoSpace(name)
                        .includes(formattedSearchText)
                    || noCaseNoSpace(params)
                        .includes(formattedSearchText)
                );
            });
    }, [searchText]);

    const renderVariants = () => {
        const variants = groupByName[selected.name];
        if (!(variants?.length > 1)) { return null; }
        return (
            <>
                <Subheading>
                    Варианты
                </Subheading>
                <Grid>
                    {variants
                        .map((params) => allIconsMap[getIconPath({ name: selected.name, params })])
                        .map(({ name, params, Component }) => (
                            <Cell key={params} onClick={() => setSelected({ name, params })}>
                                <Component />
                            </Cell>
                        ))}
                </Grid>
            </>
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
            <>
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
            </>
        ),
        [tabs.svg]: (
            <>
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
            </>
        ),
    };

    const renderIconInfo = () => {
        const selectedIcon = allIconsMap[`${selected.name}/${selected.params}`];
        if (!selectedIcon) { return null; }

        const [size, type, style] = selectedIcon.params.split('/');

        return (
            <div className={classes.iconInfo}>
                <div className={classes.iconPreview}>
                    <selectedIcon.Component />
                </div>
                <div className={classes.iconMeta}>
                    <div className={classes.iconMetaRow}>
                        {size}
                    </div>
                    <div className={classes.iconMetaRow}>
                        {type}
                    </div>
                    <div className={classes.iconMetaRow}>
                        {style}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <TextField
                borderRadius="square"
                className={classes.search}
                label="Поиск"
                value={searchText}
                onChange={({ target: { value } }) => setSearchText(value)}
            />
            {Object.entries(groupBySize).map(([size, icons]) => {
                const filteredIcons = filterIcons(icons.map((name) => allIconsMap[name]));
                if (!filteredIcons.length) { return null; }
                return (
                    <>
                        <div className={classes.textCenter}>
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
                    </>
                );
            })}
            <ModalStyled
                open={modalOpen}
                onClose={closeModal}
                header={noCase(selected.name)}
            >
                <>
                    {renderIconInfo()}
                    <Subheading>
                        Использование
                    </Subheading>
                    <TabsStyled
                        items={[
                            { label: 'React-компонент', value: tabs.component },
                            { label: 'SVG', value: tabs.svg },
                        ]}
                        value={currentTab}
                        onSetValue={({ value }) => setCurrentTab(value as Tab)}
                    />
                    {examples[currentTab]}
                    {renderVariants()}
                </>
            </ModalStyled>
        </>
    );
};

const ChangeColor: Story = () => {
    const tabs = valuesAsKeysFromArray(['wrapper', 'icon'] as const);
    type Tab = keyof typeof tabs;

    const [currentTab, setCurrentTab] = useState<Tab>(tabs.wrapper);

    const examples: Record<Tab, ReactChild> = {
        [tabs.wrapper]: (
            <>
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
            </>
        ),
        [tabs.icon]: (
            <>
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
            </>
        ),
    };

    return (
        <div>
            <Description
                markdown={`Все одноцветные иконки наследуют текущий цвет текста через свойство \`currentColor\`. 
                Поэтому для стилизации иконки достаточно изменить css-свойство \`color\` любым удобным способом. 
                Ниже продемонстрирован пример стилизации через функцию \`styledKit\`:`}
            />
            <TabsStyled
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
