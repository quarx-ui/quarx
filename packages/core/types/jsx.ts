import { ReactElement, SVGProps } from 'react';

export interface Clickable {
    click(): void;
}

export type SVGIcon = ReactElement<SVGProps<SVGElement>>;
