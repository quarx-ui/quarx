declare module '@storybook/react-vite' {
    export type StoryFn<TArgs = Record<string, unknown>> = ((args: TArgs) => import('react').ReactElement | null) & {
        args?: Partial<TArgs>;
        argTypes?: ArgTypes<TArgs>;
        parameters?: Record<string, unknown>;
        storyName?: string;
    };

    export type StoryObj<TArgs = Record<string, unknown>> = {
        args?: Partial<TArgs>;
        parameters?: Record<string, unknown>;
        render?: StoryFn<TArgs>;
    };

    export type Meta<TArgs = Record<string, unknown>> = {
        title?: string;
        component?: unknown;
        args?: Partial<TArgs>;
        argTypes?: ArgTypes<TArgs>;
        parameters?: Record<string, unknown>;
    };

    export type ArgTypes<TArgs = Record<string, unknown>> = Partial<Record<keyof TArgs | string, any>>;
    export type Args = Record<string, unknown>;
    export type Decorator = (Story: StoryFn, context: Record<string, unknown>) => import('react').ReactElement | null;
    export type Preview = Record<string, unknown>;
}

declare module '@storybook/addon-docs/blocks' {
    export const Controls: import('react').ComponentType<Record<string, unknown>>;
    export const Description: import('react').ComponentType<Record<string, unknown>>;
    export const Heading: import('react').ComponentType<Record<string, unknown>>;
    export const Primary: import('react').ComponentType<Record<string, unknown>>;
    export const Source: import('react').ComponentType<Record<string, unknown>>;
    export const Stories: import('react').ComponentType<Record<string, unknown>>;
    export const Subheading: import('react').ComponentType<Record<string, unknown>>;
    export const Subtitle: import('react').ComponentType<Record<string, unknown>>;
    export const Title: import('react').ComponentType<Record<string, unknown>>;
}

declare module '@storybook/addon-links/react' {
    const LinkTo: import('react').ComponentType<Record<string, unknown>>;
    export default LinkTo;
}

declare module 'storybook/internal/components' {
    export const AddonPanel: import('react').ComponentType<Record<string, unknown>>;
    export const Code: import('react').ComponentType<Record<string, unknown>>;
    export const Div: import('react').ComponentType<Record<string, unknown>>;
    export const H2: import('react').ComponentType<Record<string, unknown>>;
    export const HR: import('react').ComponentType<Record<string, unknown>>;
    export const IconButton: import('react').ComponentType<Record<string, unknown>>;
    export const LI: import('react').ComponentType<Record<string, unknown>>;
    export const P: import('react').ComponentType<Record<string, unknown>>;
    export const TooltipLinkList: import('react').ComponentType<Record<string, unknown>>;
    export const UL: import('react').ComponentType<Record<string, unknown>>;
    export const WithTooltip: import('react').ComponentType<Record<string, unknown>>;
}

declare module 'storybook/internal/types' {
    export type Args = Record<string, unknown>;
}

declare module 'storybook/manager-api' {
    export const addons: {
        add: (id: string, config: Record<string, unknown>) => void;
        register: (id: string, callback: () => void) => void;
        setConfig: (config: Record<string, unknown>) => void;
    };
    export const types: Record<string, string>;
    export const useParameter: <T>(parameterKey: string, defaultValue: T) => T;
}

declare module 'storybook/theming' {
    export type Theme = Record<string, unknown>;
    export const create: (theme: Record<string, unknown>) => Theme;
}

declare module 'storybook/viewport' {
    export type ViewportMap = Record<string, unknown>;
    export const INITIAL_VIEWPORTS: ViewportMap;
}

declare module 'vite' {
    export const defineConfig: <T>(config: T) => T;
    export const mergeConfig: <T, U>(config: T, overrides: U) => T & U;
}

declare module 'vite-plugin-svgr' {
    const svgr: (options?: Record<string, unknown>) => unknown;
    export default svgr;
}
