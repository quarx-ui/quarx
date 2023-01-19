import fs from 'fs';
import path from 'path';

export const initCreateFile = (
    initialPath: string,
) => (
    async (fileName: string, content: string): Promise<void> => {
        try {
            await fs.promises.writeFile(
                path.join(initialPath, fileName),
                content,
            );
        } catch (e) {
            console.warn(e);
        }
    }
);

export const initMakeDir = (
    initialPath: string,
) => (
    async (folderName: string): Promise<void> => {
        try {
            await fs.promises.mkdir(
                path.join(initialPath, folderName),
                { recursive: true },
            );
        } catch (e) {
            console.warn(e);
        }
    }
);

export const firstLetterToLowerCase = (value: string): string => (
    value.charAt(0).toLowerCase() + value.slice(1)
);

export const capitalize = (value: string): string => {
    const caps = value.split('').reduce<string[]>((acc, char, index) => {
        const isCaps = char.toUpperCase() === char;
        const isFirstSymbol = index === 0;
        if (isCaps) {
            const withSpace = isFirstSymbol ? [char] : ['_', char];
            return [...acc, ...withSpace];
        }
        return [...acc, char.toUpperCase()];
    }, []);
    return caps.join('');
};
