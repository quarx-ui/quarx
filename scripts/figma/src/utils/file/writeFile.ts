import fs from 'fs';
import bluebird from 'bluebird';

export type WriteFileType = { path: string, data: string };

const writePromise = bluebird.promisify(fs.writeFile);

export async function writeFile({ path, data }: WriteFileType): Promise<void> {
    writePromise(path, data)
        .then(() => console.log(`Файл создан:\n${path}`))
        .catch((e) => console.log(`Не удалось создать файл:\n${path}`, e));
}
