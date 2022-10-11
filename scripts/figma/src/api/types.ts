import { Component, Node, Style } from 'figma-api';
import { GetFileNodesResult } from 'figma-api/lib/api-types';

export interface FileNode {
    document: Node,
    components: { [nodeId: string]: Component },
    schemaVersion: number,
    styles: { [styleName: string]: Style },
}

export type FileNodes = GetFileNodesResult['nodes']
