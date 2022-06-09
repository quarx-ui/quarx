export const transitions: any = { // TODO
    create: (...args: string[]) => (
        args
            .map((arg) => (`${arg} 250ms ease`))
            .join(', ')
    ),
};
