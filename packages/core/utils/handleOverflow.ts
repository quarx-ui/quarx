export const handleMax = (value: number, max?: number) => (max !== undefined && value > max ? max : value);
export const handleMin = (value: number, min?: number) => (min !== undefined && value < min ? min : value);
export const handleOverflow = (value: number, min?: number, max?: number) => handleMin(handleMax(value, max), min);
