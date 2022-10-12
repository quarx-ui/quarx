import * as Figma from 'figma-api';
import { CONFIG } from './config';

export const figmaApi = new Figma.Api({ personalAccessToken: CONFIG.FIGMA_TOKEN });
export * from './methods';
export * from './types';
