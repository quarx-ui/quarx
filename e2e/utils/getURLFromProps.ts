import { SEPARATORS, ThemeTypes, ComponentsListTypes } from '@e2e/constants';
import { PropsType } from '@e2e/test-utils';

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
    themeType: ThemeTypes,
    props?: Props,
) {
    const stringFromProps = getStringFromProps(props);
    return `/${themeType}/${component}${stringFromProps ? `--${stringFromProps}` : ''}`;
}
