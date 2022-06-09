import functions from 'jss-plugin-rule-value-function';
import global from 'jss-plugin-global';
import nested from 'jss-plugin-nested';
import camelCase from 'jss-plugin-camel-case';
import defaultUnit from 'jss-plugin-default-unit';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';
import propsSort from 'jss-plugin-props-sort';
import { JssOptions } from 'jss';

// Subset of jss-preset-default with only the plugins the QuarX-UI components are using.
export function jssPreset(): Partial<JssOptions> {
    return {
        plugins: [
            functions(),
            global(),
            nested(),
            camelCase(),
            defaultUnit(),
            vendorPrefixer(),
            propsSort(),
        ],
    };
}
