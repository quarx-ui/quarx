import { Tabs as KitTabs } from '@kit';
import React, { FC } from 'react';
import { ArrowGraphIcon } from '@kit-icons/arrow-graph/36px/stroke/rounded';
import { BuildingsIcon } from '@kit-icons/buildings/36px/stroke/rounded';
import { CirclesOnCircleIcon } from '@kit-icons/circles-on-circle/36px/stroke/rounded';
import { TestTabsProps } from './types';

const items = [
    { label: 'Главная', value: 'home' },
    { label: 'Новости', value: 'news' },
    { label: 'Контакты', value: 'contacts' },
];

const iconItems = [
    { label: <ArrowGraphIcon />, value: 'graph' },
    { label: <BuildingsIcon />, value: 'buildings' },
    { label: <CirclesOnCircleIcon />, value: 'circles' },
];

export const Tabs: FC<TestTabsProps> = ({
    withIcons,
    ...props
}) => (
    /* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-ignore
    <KitTabs
        {...props}
        items={withIcons ? iconItems : items}
        type={withIcons ? 'segmented' : props.type}
    />
);
