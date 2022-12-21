import { FC, useState } from 'react';
import { Source } from '@storybook/addon-docs'
import { makeStyles } from '@core';

interface SourceProps {
    name?: string,
    language?: string;
    code?: string;
}

export interface SourceTabsProps {
    sources: Record<string, SourceProps>,
    dark?: boolean,
    language?: string,
}

export const useStyles = makeStyles(() =>( {
    root: {
        fontFamily: '"Nunito Sans", sans-serif',
    },
    tabs: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#333333',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        color: 'white',
        fontSize: 14,
        fontWeight: 700,
    },
    tab: {
        position: 'relative',
        padding: '10px 20px',
        cursor: 'pointer',
    },
    selected: {
        boxShadow: '#1ea7fd 0 -3px 0 0 inset'
    },
    container: {
        '& .docblock-source': {
            marginTop: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        },
    },
}), {name: 'SourceTabs'})

export const SourceTabs: FC<SourceTabsProps> = ({
    sources,
    dark= true,
    language: lang
}) => {
    const styles = useStyles();
    const initialTab = Object.keys(sources)[0];

    const [selected, setSelected] = useState(initialTab);

    const selectTab = (name: string) => setSelected(name);

    const {
        code,
        language = lang,
    } = sources[selected];

    return (
        <div css={styles.root}>
            <div css={styles.tabs}>
                {Object.entries(sources).map(([key, {name}]) => (
                    <div
                        css={[styles.tab, selected === key && styles.selected]}
                        onClick={() => selectTab(key)}
                    >
                        {name ?? key}
                    </div>
                ))}
            </div>
            <div css={styles.container}>
                <Source
                    dark={dark}
                    code={code}
                    language={language}
                />
            </div>
        </div>
    )
}
