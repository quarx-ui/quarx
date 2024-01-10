export const ownerDocument = (node: Node | null | undefined): Document => (
    node?.ownerDocument || document
);
