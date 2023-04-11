import { PALETTE_COLORS } from '@core';
import { QX_SIZE } from '@core/enums';
import { TabsProps } from '../types';
import { TABS_TYPES } from '../common';

const items = [
    { label: 'Главная страница', value: 'home' },
    { label: 'Бизнес операции', value: 'business' },
    { label: 'Страхование жизни', value: 'insurance' },
    { label: 'Транспорт до дома', value: 'transport' },
    { label: 'Медицина и здоровье', value: 'medicine' },
    { label: 'Контакты', value: 'contacts' },
];

export const defaultTabsStoryArgs: TabsProps = {
    type: TABS_TYPES.default,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
    items,
};
