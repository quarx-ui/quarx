import { getUAString } from './getUAString';

export function isLayoutViewport(): boolean {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
