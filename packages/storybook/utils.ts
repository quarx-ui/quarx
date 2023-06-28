export const STORY_PATHS = {
    core: {
        components: {
            main: (value: string) => `core/components/main/${value}`,
            experimental: (value: string) => `core/components/experimental/${value}`,
            system: (value: string) => `core/components/system/${value}`,
        },
        hooks: (value: string) => `core/hooks/${value}`,
        style: (value: string) => `core/style/${value}`,
        manuals: (value?: string) => `core/manuals${value ? `/${value}` : ''}`,
    },
    icons: (value: string) => `icons/${value}`,
};
