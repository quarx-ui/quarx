import React, { Fragment, ReactNode } from 'react';
import { makeStyles } from '@core';

const useStyles = makeStyles(({ palette, typography }) => ({
    root: {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: 960,
        padding: 32,
        color: palette.text.main,
        ...typography.base.text.medium,
        lineHeight: 1.6,

        '& h1, & h2, & h3, & h4, & h5, & h6': {
            margin: '28px 0 12px',
            color: palette.text.main,
            lineHeight: 1.25,
        },

        '& h1': {
            ...typography.base.headline.medium,
        },

        '& h2': {
            ...typography.base.headline.small,
        },

        '& h3': {
            ...typography.base.text.large,
            fontWeight: 600,
        },

        '& p': {
            margin: '0 0 14px',
        },

        '& ul': {
            margin: '0 0 16px 20px',
            padding: 0,
        },

        '& li': {
            marginBottom: 6,
        },

        '& a': {
            color: palette.colors.brand.default,
        },

        '& img': {
            maxWidth: '100%',
            height: 'auto',
            verticalAlign: 'middle',
        },

        '& code': {
            padding: '2px 5px',
            borderRadius: 4,
            background: palette.background.textField.main,
            color: palette.text.main,
            fontFamily: 'monospace',
            fontSize: '0.9em',
        },

        '& pre': {
            overflow: 'auto',
            margin: '0 0 18px',
            padding: 16,
            borderRadius: 8,
            background: palette.background.textField.main,
            border: `1px solid ${palette.border.main}`,
        },

        '& pre code': {
            padding: 0,
            background: 'transparent',
        },

        '& table': {
            width: '100%',
            margin: '0 0 18px',
            borderCollapse: 'collapse',
        },

        '& th, & td': {
            padding: '8px 10px',
            border: `1px solid ${palette.border.main}`,
            textAlign: 'left',
            verticalAlign: 'top',
        },

        '& th': {
            background: palette.background.textField.main,
            fontWeight: 600,
        },
    },
}));

const inlinePattern = /(\[!\[[^\]]*]\([^)]+\)]\([^)]+\)|!\[[^\]]*]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

const getAttribute = (value: string, attribute: string) => {
    const match = value.match(new RegExp(`${attribute}="([^"]*)"`));

    return match?.[1];
};

const renderImage = (src: string, alt?: string, width?: string) => (
    <img
        src={src}
        alt={alt ?? ''}
        width={width}
    />
);

const renderInline = (text: string): ReactNode[] => text
    .split(inlinePattern)
    .filter(Boolean)
    .map((part, index) => {
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={index}>{part.slice(1, -1)}</code>;
        }

        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }

        const linkedImage = part.match(/^\[!\[([^\]]*)]\(([^)]+)\)]\(([^)]+)\)$/);

        if (linkedImage) {
            return (
                <a key={index} href={linkedImage[3]} target="_blank" rel="noreferrer">
                    {renderImage(linkedImage[2], linkedImage[1])}
                </a>
            );
        }

        const image = part.match(/^!\[([^\]]*)]\(([^)]+)\)$/);

        if (image) {
            return <Fragment key={index}>{renderImage(image[2], image[1])}</Fragment>;
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (link) {
            return (
                <a key={index} href={link[2]} target="_blank" rel="noreferrer">
                    {link[1]}
                </a>
            );
        }

        return <Fragment key={index}>{part}</Fragment>;
    });

const isTableDivider = (line: string) => /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line);

const renderTable = (lines: string[], key: number) => {
    const rows = lines
        .filter((line) => !isTableDivider(line))
        .map((line) => line
            .replace(/^\||\|$/g, '')
            .split('|')
            .map((cell) => cell.trim()));

    const [head, ...body] = rows;

    return (
        <table key={key}>
            {head && (
                <thead>
                    <tr>
                        {head.map((cell, index) => (
                            <th key={index}>{renderInline(cell)}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {body.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{renderInline(cell)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const renderHtmlImageBlock = (html: string, key: number) => {
    const image = html.match(/<img\s+([\s\S]*?)\/?>/i);

    if (!image) {
        return undefined;
    }

    const attrs = image[1];
    const src = getAttribute(attrs, 'src');

    if (!src) {
        return undefined;
    }

    return (
        <p key={key}>
            {renderImage(src, getAttribute(attrs, 'alt'), getAttribute(attrs, 'width'))}
        </p>
    );
};

const renderBlocks = (markdown: string) => {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    const blocks: ReactNode[] = [];
    let index = 0;

    while (index < lines.length) {
        const line = lines[index];
        const trimmed = line.trim();

        if (!trimmed) {
            index += 1;
            continue;
        }

        if (trimmed.startsWith('<p') || trimmed.startsWith('<img')) {
            const html: string[] = [trimmed];
            index += 1;

            while (
                index < lines.length
                && !html.join('\n').includes('</p>')
                && !html.join('\n').includes('/>')
                && !html.join('\n').includes('>')
            ) {
                html.push(lines[index].trim());
                index += 1;
            }

            if (index < lines.length && !html.join('\n').includes('</p>') && lines[index].trim().includes('</p>')) {
                html.push(lines[index].trim());
                index += 1;
            }

            const imageBlock = renderHtmlImageBlock(html.join('\n'), blocks.length);

            if (imageBlock) {
                blocks.push(imageBlock);
            }

            continue;
        }

        if (trimmed.startsWith('<')) {
            index += 1;
            continue;
        }

        if (trimmed.startsWith('```')) {
            const code: string[] = [];
            index += 1;

            while (index < lines.length && !lines[index].trim().startsWith('```')) {
                code.push(lines[index]);
                index += 1;
            }

            blocks.push(
                <pre key={blocks.length}>
                    <code>{code.join('\n')}</code>
                </pre>,
            );
            index += 1;
            continue;
        }

        const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);

        if (heading) {
            const Tag = `h${Math.min(heading[1].length, 6)}` as keyof JSX.IntrinsicElements;
            blocks.push(<Tag key={blocks.length}>{renderInline(heading[2])}</Tag>);
            index += 1;
            continue;
        }

        if (trimmed.startsWith('|')) {
            const tableLines: string[] = [];

            while (index < lines.length && lines[index].trim().startsWith('|')) {
                tableLines.push(lines[index].trim());
                index += 1;
            }

            blocks.push(renderTable(tableLines, blocks.length));
            continue;
        }

        if (/^[-*]\s+/.test(trimmed)) {
            const items: string[] = [];

            while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
                items.push(lines[index].trim().replace(/^[-*]\s+/, ''));
                index += 1;
            }

            blocks.push(
                <ul key={blocks.length}>
                    {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderInline(item)}</li>
                    ))}
                </ul>,
            );
            continue;
        }

        const paragraph: string[] = [];

        while (
            index < lines.length
            && lines[index].trim()
            && !lines[index].trim().startsWith('```')
            && !lines[index].trim().startsWith('|')
            && !lines[index].trim().startsWith('<')
            && !/^(#{1,6})\s+/.test(lines[index].trim())
            && !/^[-*]\s+/.test(lines[index].trim())
        ) {
            paragraph.push(lines[index].trim());
            index += 1;
        }

        if (paragraph.length) {
            blocks.push(<p key={blocks.length}>{renderInline(paragraph.join(' '))}</p>);
        } else {
            index += 1;
        }
    }

    return blocks;
};

export const MarkdownDocument = ({ markdown }: { markdown: string }) => {
    const styles = useStyles();

    return (
        <article css={styles.root}>
            {renderBlocks(markdown)}
        </article>
    );
};
