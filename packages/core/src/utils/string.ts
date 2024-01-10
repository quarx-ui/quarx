export const capitalizeFirstLetter = (str: string) : string => (
    str.replace(/^./, (letter) => letter.toUpperCase())
);
