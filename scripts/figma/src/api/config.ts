import path from 'path';
import { config } from 'dotenv';
import { existsSync } from 'fs';

const secretsPath = path.resolve(process.cwd(), '../../.secrets');

if (existsSync(secretsPath)) {
    config({ path: secretsPath });
}

export const CONFIG = {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN as string,
    ICONS_FILE_KEY: process.env.ICONS_FILE_KEY as string,
};
