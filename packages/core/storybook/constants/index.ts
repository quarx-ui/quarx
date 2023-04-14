export const MINIMAL_VIEWPORTS = {
    iPhone13ProMax: {
        name: 'Apple iPhone 13 Pro Max (2021)',
        styles: {
            width: '428px',
            height: '926px',
        },
    },
    OnePlus10Pro: {
        name: 'OnePlus 10 Pro (2022)',
        styles: {
            width: '412px',
            height: '919px',
        },
    },
    iPadAir10: {
        name: 'Apple iPad Air 10.9" (2020)',
        styles: {
            width: '820px',
            height: '1180px',
        },
    },
    iPad12: {
        name: 'Apple iPad Pro 12.9" (2020) ',
        styles: {
            width: '1024px',
            height: '1366px',
        },
    },
};

export const STORYBOOK_VIEWPORTS = (customViewports = {}) => ({
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
});
