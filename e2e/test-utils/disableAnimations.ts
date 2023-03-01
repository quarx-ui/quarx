import { Page } from '@playwright/test';

export const disableAnimations = (page: Page) => {
    page.on('domcontentloaded', async (p) => {
        await p.evaluate(() => {
            const styleTag = document.createElement('style');

            styleTag.textContent = `
                *, *::before, *::after {
                    transition: none !important;
                    caret-color: transparent !important;
                    scroll-behavior: auto !important;
                    animation-duration: 0s !important;
                    animation-delay: 0s !important;
                    animation-fill-mode: forwards !important;
                }
            `;

            document.documentElement.append(styleTag);
        });
    });
};
