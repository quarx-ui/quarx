// This is autogenerated file, don't try to edit it manually
/* eslint-disable */
import { deepmerge } from '@core/styles/engine/utils';
import { light } from './light';
import { Palette } from '.';

const darkPalette = {
    type: 'dark',
    Background: {
        blackout: 'rgba(0, 0, 0, 0.24)',
        main: '#2b353d',
        secondary: '#182329',
        tertiary: '#4e5961'
    },
    Button: {
        contained: {
            critical: {
                enabled: '#f23040',
                hover: '#ff4c5b',
                press: '#cc2836'
            },
            primary: {
                disabled: 'rgba(255, 255, 255, 0.12)',
                enabled: '#28cc7a',
                hover: '#2de589',
                press: '#26995f'
            },
            secondary: {
                enabled: '#ffffff',
                hover: '#ffffff',
                press: '#ffffff'
            }
        },
        outline: {
            critical: {
                bgHover: '#f23040',
                bgPress: '#cc2836',
                strokeEnabled: '#f23040'
            },
            primary: {
                bgHover: '#28cc7a',
                bgPress: '#269960',
                strokeDisabled: 'rgba(255, 255, 255, 0.16)',
                strokeEnabled: '#28cc7a'
            },
            secondary: {
                bgHover: 'rgba(255, 255, 255, 0.16)',
                bgPress: 'rgba(255, 255, 255, 0.24)',
                strokeEnabled: 'rgba(255, 255, 255, 0.24)'
            }
        },
        text: {
            critical: {
                bgHover: 'rgba(252, 208, 210, 0.08)',
                bgPress: 'rgba(252, 208, 210, 0.16)'
            },
            primary: {
                bgHover: 'rgba(198, 244, 198, 0.08)',
                bgPress: 'rgba(198, 244, 198, 0.16)'
            },
            secondary: {
                bgHover: 'rgba(255, 255, 255, 0.16)',
                bgPress: 'rgba(255, 255, 255, 0.24)'
            }
        }
    },
    Checkbox: {
        active: {
            bg: '#28cc7a',
            bgHover: '#2de589',
            icon: '#ffffff'
        },
        critical: {
            bg: '#f23040',
            stroke: '#f23040'
        },
        disabled: {
            bg: 'rgba(255, 255, 255, 0.12)',
            icon: 'rgba(255, 255, 255, 0.4)'
        },
        enabled: {
            bg: 'rgba(255, 255, 255, 0.08)',
            iconHover: 'rgba(255, 255, 255, 0.16)',
            stroke: 'rgba(255, 255, 255, 0.24)',
            strokeHover: 'rgba(255, 255, 255, 0.32)'
        }
    },
    ContainerState: {
        focus: '#28cc7a',
        focus2: 'rgba(255, 255, 255, 0.72)',
        focus3: 'rgba(0, 0, 0, 0.32)',
        hover: 'rgba(255, 255, 255, 0.08)'
    },
    Divider: {
        main: 'rgba(255, 255, 255, 0.16)',
        mainInverse: 'rgba(255, 255, 255, 0.24)',
        secondary: 'rgba(255, 255, 255, 0.08)',
        secondaryInverse: 'rgba(255, 255, 255, 0.16)'
    },
    Icon: {
        brand: '#24cc7d',
        critical: '#ff3238',
        main: '#ffffff',
        mainInverse: '#000000',
        secondary: 'rgba(255, 255, 255, 0.56)',
        secondaryInverse: 'rgba(0, 0, 0, 0.56)',
        success: '#20d82c',
        tertiary: 'rgba(255, 255, 255, 0.4)',
        tertiaryInverse: 'rgba(0, 0, 0, 0.4)',
        warning: '#f99c18'
    },
    Snackbar: {
        bg1: {
            critical: 'radial-gradient(35.0% 100.0% at -0.0% 0.0%, rgba(89, 18, 30, 1) 0%, rgba(24, 35, 41, 1) 100%)',
            default: '#182329',
            success: 'radial-gradient(35.0% 100.0% at 0.0% 0.0%, rgba(42, 89, 18, 1) 0%, rgba(24, 35, 41, 1) 100%)',
            warning: 'radial-gradient(35.0% 100.0% at 0.0% 0.0%, rgba(89, 77, 18, 1) 0%, rgba(24, 35, 41, 1) 100%)'
        },
        bg2: {
            critical: 'radial-gradient(0.0% -0.0% at -0.0% 50.0%, rgba(89, 18, 30, 1) 0%, rgba(24, 35, 41, 1) 100%)',
            default: '#182329',
            success: 'radial-gradient(0.0% -0.0% at -0.0% 50.0%, rgba(36, 77, 15, 1) 0%, rgba(24, 35, 41, 1) 100%)',
            warning: 'radial-gradient(0.0% -0.0% at -0.0% 50.0%, rgba(89, 77, 18, 1) 0%, rgba(24, 35, 41, 1) 100%)'
        }
    },
    Text: {
        brand: '#24cc7d',
        critical: '#ff3238',
        main: '#ffffff',
        mainInverse: '#000000',
        secondary: 'rgba(255, 255, 255, 0.56)',
        secondaryInverse: 'rgba(0, 0, 0, 0.56)',
        success: '#20d82c',
        tertiary: 'rgba(255, 255, 255, 0.4)',
        tertiaryInverse: 'rgba(0, 0, 0, 0.4)',
        warning: '#f99c18'
    },
    TextField: {
        base1: {
            disabled: {
                bg: 'rgba(255, 255, 255, 0.06)'
            },
            enabled: {
                bg: 'rgba(255, 255, 255, 0.08)'
            },
            error: {
                bg: '#2b363d',
                stroke: '#ff3238'
            },
            focus: {
                bg: '#2b363d',
                stroke: '#24cc7d'
            },
            hover: {
                bg: '#2b363d',
                stroke: 'rgba(255, 255, 255, 0.16)'
            }
        },
        base2: {
            disabled: {
                bg: 'rgba(255, 255, 255, 0.08)'
            },
            enabled: {
                bg: '#2b363d',
                stroke: 'rgba(255, 255, 255, 0.2)'
            }
        },
        error: '#c4c4c4',
        focus: '#c4c4c4',
        hover: '#c4c4c4'
    },
    Tooltip: {
        main: '#c4c4c4'
    }
};

export const dark: Palette = deepmerge(light, darkPalette);
