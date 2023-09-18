export interface Node {
    id: number;
    text: string;
}

export interface Edge {
    from: number,
    to: number
}

export interface DiagramProps {
    nodes: Node[];
    edges: Edge[];
}