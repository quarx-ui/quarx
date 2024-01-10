/** @deprecated
 * Будет изменено в следующем мажорном релизе. Рекомендуется использовать `theme.typography`
 * */
export const typography = {
    Text: {
        L: {
            Medium: {
                fontFamily: 'SB Sans Text',
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: -0.1,
                lineHeight: '24px',
            },
            Regular: {
                fontFamily: 'SB Sans Text',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: -0.1,
                lineHeight: '24px',
            },
            Semibold: {
                fontFamily: 'SB Sans Text',
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: -0.1,
                lineHeight: '24px',
            },
        },
        M: {
            Medium: {
                fontFamily: 'SB Sans Text',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
            },
            Regular: {
                fontFamily: 'SB Sans Text',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
            },
            Semibold: {
                fontFamily: 'SB Sans Text',
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '20px',
            },
        },
        S: {
            Medium: {
                fontFamily: 'SB Sans Text',
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: 0.2,
                lineHeight: '16px',
            },
            Regular: {
                fontFamily: 'SB Sans Text',
                fontWeight: 400,
                fontSize: 12,
                letterSpacing: 0.2,
                lineHeight: '16px',
            },
            Semibold: {
                fontFamily: 'SB Sans Text',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: 0.2,
                lineHeight: '16px',
            },
        },
        XL: {
            Medium: {
                fontFamily: 'SB Sans Text',
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: -0.2,
                lineHeight: '28px',
            },
            Regular: {
                fontFamily: 'SB Sans Text',
                fontWeight: 400,
                fontSize: 20,
                letterSpacing: -0.2,
                lineHeight: '28px',
            },
            Semibold: {
                fontFamily: 'SB Sans Text',
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: -0.2,
                lineHeight: '28px',
            },
        },
    },
    Headline: {
        XS: {
            Light: {
                fontFamily: 'SB Sans Display',
                fontWeight: 300,
                fontSize: 20,
                lineHeight: '28px',
            },
            Regular: {
                fontFamily: 'SB Sans Display',
                fontWeight: 400,
                fontSize: 20,
                lineHeight: '28px',
            },
            Semibold: {
                fontFamily: 'SB Sans Display',
                fontWeight: 600,
                fontSize: 20,
                lineHeight: '28px',
            },
        },
        S: {
            Light: {
                fontFamily: 'SB Sans Display',
                fontWeight: 300,
                fontSize: 24,
                lineHeight: '32px',
            },
            Regular: {
                fontFamily: 'SB Sans Display',
                fontWeight: 400,
                fontSize: 24,
                lineHeight: '32px',
            },
            Semibold: {
                fontFamily: 'SB Sans Display',
                fontWeight: 600,
                fontSize: 24,
                lineHeight: '32px',
            },
        },
        M: {
            Medium: {
                fontFamily: 'SB Sans Display',
                fontWeight: 300,
                fontSize: 32,
                lineHeight: '40px',
                letterSpacing: -0.2,
            },
            Regular: {
                fontFamily: 'SB Sans Display',
                fontWeight: 400,
                fontSize: 32,
                lineHeight: '40px',
                letterSpacing: -0.2,
            },
            Semibold: {
                fontFamily: 'SB Sans Display',
                fontWeight: 600,
                fontSize: 32,
                lineHeight: '40px',
                letterSpacing: -0.2,
            },
        },
        L: {
            Medium: {
                fontFamily: 'SB Sans Display',
                fontWeight: 300,
                lineHeight: '48px',
                fontSize: 40,
                letterSpacing: -0.2,
            },
            Regular: {
                fontFamily: 'SB Sans Display',
                fontWeight: 400,
                lineHeight: '48px',
                fontSize: 40,
                letterSpacing: -0.2,
            },
            Semibold: {
                fontFamily: 'SB Sans Display',
                fontWeight: 600,
                lineHeight: '48px',
                fontSize: 40,
                letterSpacing: -0.2,
            },
        },
        XL: {
            Medium: {
                fontFamily: 'SB Sans Display',
                fontWeight: 300,
                lineHeight: '56px',
                fontSize: 48,
                letterSpacing: -0.4,
            },
            Regular: {
                fontFamily: 'SB Sans Display',
                fontWeight: 400,
                lineHeight: '56px',
                fontSize: 48,
                letterSpacing: -0.4,
            },
            Semibold: {
                fontFamily: 'SB Sans Display',
                fontWeight: 600,
                lineHeight: '56px',
                fontSize: 48,
                letterSpacing: -0.4,
            },
        },
    },
} as const;

/** @deprecated
 * Будет изменено в следующем мажорном релизе. Рекомендуется использовать `theme.typography`
 * */
export type Typography = typeof typography;
