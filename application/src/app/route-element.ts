export interface RouteElement {
    path: string;
    data: {
        title: string;
        icon?: string;
        priority?: number;
        filePath?: string;
    };
    children?: RouteElement[];
    parent?: RouteElement;
}