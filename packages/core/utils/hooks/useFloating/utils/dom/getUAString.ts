interface NavigatorUAData {
    brands: Array<{brand: string; version: string}>;
    mobile: boolean;
    platform: string;
}

export function getUAString(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const uaData = (navigator as any).userAgentData as
        | NavigatorUAData
        | undefined;

    if (uaData?.brands) {
        return uaData.brands
            .map((item) => `${item.brand}/${item.version}`)
            .join(' ');
    }

    return navigator.userAgent;
}
