import React from 'react';
import { addons, types, useParameter } from 'storybook/manager-api';

const AddonID = 'storybook/quarx-designs';
const PanelID = `${AddonID}/panel`;

type DesignConfig = {
    disable?: boolean;
    name?: string;
    type?: 'figma' | 'iframe' | 'image' | 'link' | string;
    url?: string;
};

type DesignParameter = DesignConfig | DesignConfig[] | null;

const getDesigns = (parameter: DesignParameter): DesignConfig[] => {
    if (!parameter) {
        return [];
    }

    return (Array.isArray(parameter) ? parameter : [parameter])
        .filter((design) => design && !design.disable && design.url);
};

const panelStyles: React.CSSProperties = {
    height: '100%',
    minHeight: 240,
    background: '#fff',
};

const emptyStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: 240,
    padding: 24,
    color: '#667085',
    fontFamily: 'system-ui, sans-serif',
    fontSize: 13,
};

const headerStyles: React.CSSProperties = {
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    height: 40,
    padding: '0 12px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    fontFamily: 'system-ui, sans-serif',
    fontSize: 13,
};

const contentStyles: React.CSSProperties = {
    width: '100%',
    height: 'calc(100% - 40px)',
    minHeight: 360,
    border: 0,
};

const imageStyles: React.CSSProperties = {
    display: 'block',
    maxWidth: '100%',
    maxHeight: 'calc(100% - 40px)',
    margin: '0 auto',
};

const getTitle = (design: DesignConfig, index: number) => (
    design.name || design.type || `Design ${index + 1}`
);

const renderDesign = (design: DesignConfig, index: number) => {
    const title = getTitle(design, index);
    const url = design.url || '';
    const isImage = design.type === 'image' || /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(url);
    const isLink = design.type === 'link';

    return React.createElement(
        'section',
        {
            key: `${title}-${url}`,
            style: panelStyles,
        },
        React.createElement(
            'div',
            { style: headerStyles },
            React.createElement('strong', null, title),
            React.createElement('a', {
                href: url,
                target: '_blank',
                rel: 'noreferrer',
            }, 'Open'),
        ),
        isLink && React.createElement('div', { style: emptyStyles },
            React.createElement('a', {
                href: url,
                target: '_blank',
                rel: 'noreferrer',
            }, url)),
        isImage && !isLink && React.createElement('img', {
            src: url,
            alt: title,
            style: imageStyles,
        }),
        !isImage && !isLink && React.createElement('iframe', {
            title,
            src: url,
            style: contentStyles,
            allowFullScreen: true,
        }),
    );
};

const DesignPanel = ({ active }: { active?: boolean }) => {
    const designParameter = useParameter<DesignParameter>('design', null);
    const designs = getDesigns(designParameter);

    if (!active) {
        return null;
    }

    if (!designs.length) {
        return React.createElement('div', { style: emptyStyles }, 'No design attached');
    }

    return React.createElement(
        'div',
        { style: panelStyles },
        designs.map(renderDesign),
    );
};

addons.register(AddonID, () => {
    addons.add(PanelID, {
        title: 'Design',
        type: types.PANEL,
        render: ({ active }) => React.createElement(DesignPanel, { active }),
    });
});
