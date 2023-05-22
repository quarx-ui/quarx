import { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models';

export const DEMONSTRATION_ALERT = '<br /><small>Доступно только для демонстрации</small>';

export const MINIMAL_VIEWPORTS: ViewportMap = {
    iPhone13ProMax: {
        type: 'mobile',
        name: 'Apple iPhone 13 Pro Max (2021)',
        styles: {
            width: '428px',
            height: '926px',
        },
    },
    OnePlus10Pro: {
        name: 'OnePlus 10 Pro (2022)',
        type: 'mobile',
        styles: {
            width: '412px',
            height: '919px',
        },
    },
    iPadAir10: {
        name: 'Apple iPad Air 10.9" (2020)',
        type: 'tablet',
        styles: {
            width: '820px',
            height: '1180px',
        },
    },
    iPad12: {
        name: 'Apple iPad Pro 12.9" (2020) ',
        type: 'tablet',
        styles: {
            width: '1024px',
            height: '1366px',
        },
    },
};

export const makeStorybookViewPorts = (customViewports: ViewportMap = {}) => ({
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
});

export const STORYBOOK_VIEWPORTS = makeStorybookViewPorts();
