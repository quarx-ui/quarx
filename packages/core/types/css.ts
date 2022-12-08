import { StandardProperties } from 'csstype';

export type CssProperties = StandardProperties<string | number>

export interface Font {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing?: string;
}
