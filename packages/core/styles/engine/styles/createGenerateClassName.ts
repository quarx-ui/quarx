import { GenerateId } from 'jss';
import { GenerateClassNameOptions } from './types';

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */
const pseudoClasses = [
    'checked',
    'disabled',
    'error',
    'focused',
    'focusVisible',
    'required',
    'expanded',
    'selected',
];

const hasSymbol = typeof Symbol === 'function' && Symbol.for;

const nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

// Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js
export function createGenerateClassName(options: GenerateClassNameOptions = {}): GenerateId {
    const { disableGlobal = false, productionPrefix = 'jss', seed = '' } = options;
    const seedPrefix = seed === '' ? '' : `${seed}_`;
    let ruleCounter = 0;

    const getNextCounterId = () => {
        ruleCounter += 1;
        if (process.env.NODE_ENV !== 'production') {
            if (ruleCounter >= 1e10) {
                console.warn(
                    [
                        'QuarX-UI: You might have a memory leak.',
                        'The ruleCounter is not supposed to grow that much.',
                    ].join(''),
                );
            }
        }
        return ruleCounter;
    };

    return (rule, styleSheet) => {
        const { name } = styleSheet?.options as any;

        if (name?.startsWith('QuarX')) {
            return `${seedPrefix}${name}-${rule.key}`;
        }

        // Is a global static MUI style?
        if ((name?.startsWith('Mui') || name?.startsWith('Sx')) && !styleSheet?.options.link && !disableGlobal) {
            // We can use a shorthand class name, we never use the keys to style the components.
            if (pseudoClasses.indexOf(rule.key) !== -1) {
                return `Mui-${rule.key}`;
            }

            const prefix = `${seedPrefix}${name}-${rule.key}`;

            if (!(styleSheet?.options as any).theme[nested] || seed !== '') {
                return prefix;
            }

            return `${prefix}-${getNextCounterId()}`;
        }

        if (process.env.NODE_ENV === 'production') {
            return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
        }

        const suffix = `${rule.key}-${getNextCounterId()}`;

        // Help with debuggability.
        if (styleSheet?.options.classNamePrefix) {
            return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
        }

        return `${seedPrefix}${suffix}`;
    };
}
