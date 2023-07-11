import { SEPARATORS, ComponentsListTypes } from '@e2e/constants';
import { PropsType } from '@e2e/test-utils';
import { PaletteType } from '@kit';

export function getStringFromProps<Props = PropsType>(props: Props) {
    if (!props) { return ''; }

    return Object.entries(props)
        .reduce((acc, [property, value]) => {
            const prevProp = acc ? `${acc}${SEPARATORS.PROP}` : acc;

            return `${prevProp}${property}${SEPARATORS.VALUE}${value}`;
        }, '');
}

export function getURLFromProps<Props = PropsType>(
    component: ComponentsListTypes,
    themeType: PaletteType,
    props?: Props,
) {
    const stringFromProps = getStringFromProps(props);
    return `/${themeType}/${component}${stringFromProps ? `--${stringFromProps}` : ''}`;
}
