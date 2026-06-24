import fs from 'fs';
import path from 'path';

const declarationRootArg = process.argv[2];

if (!declarationRootArg) {
    throw new Error('Declaration root argument is required');
}

const declarationRoot = path.resolve(process.cwd(), declarationRootArg);
const aliases = ['@core', '@quarx-ui/core'];
const aliasPattern = aliases
    .map((alias) => alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
const moduleSpecifierPattern = new RegExp(`(["'])(${aliasPattern})(/[^"']*)?\\1`, 'g');

const getDeclarationFiles = (directory: string): string[] => fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            return getDeclarationFiles(entryPath);
        }

        return entry.isFile() && entry.name.endsWith('.d.ts') ? [entryPath] : [];
    });

const normalizeModulePath = (fromFile: string, alias: string, subpath = '') => {
    const target = path.join(
        declarationRoot,
        subpath ? subpath.slice(1) : 'index',
    );
    const relativePath = path.relative(path.dirname(fromFile), target).replace(/\\/g, '/');
    const modulePath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;

    return alias === '@quarx-ui/core' && !subpath
        ? '@quarx-ui/core'
        : modulePath;
};

getDeclarationFiles(declarationRoot).forEach((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8');
    const rewritten = source.replace(
        moduleSpecifierPattern,
        (_match, quote: string, alias: string, subpath?: string) => {
            const modulePath = normalizeModulePath(filePath, alias, subpath);
            return `${quote}${modulePath}${quote}`;
        },
    );

    if (rewritten !== source) {
        fs.writeFileSync(filePath, rewritten);
    }
});
