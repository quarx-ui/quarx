import React from 'react';
import { FC, useState } from 'react';
import { Source } from '@storybook/addon-docs'
import { makeStylesKit } from '@core';
import clsx from 'clsx';

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

export const useStyles = makeStylesKit(() =>( {
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
    const classes = useStyles();
    const initialTab = Object.keys(sources)[0];

    const [selected, setSelected] = useState(initialTab);

    const selectTab = (name: string) => setSelected(name);

    const {
        code,
        language = lang,
    } = sources[selected];

    return (
        <div className={classes.root}>
            <div className={classes.tabs}>
                {Object.entries(sources).map(([key, {name}]) => (
                    <div
                        className={clsx(classes.tab, selected === key && classes.selected)}
                        onClick={() => selectTab(key)}
                    >
                        {name ?? key}
                    </div>
                ))}
            </div>
            <div className={classes.container}>
                <Source
                    dark={dark}
                    code={code}
                    language={language}
                />
            </div>
        </div>
    )
}
