import { HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';

// tslint:disable-next-line:no-var-requires
const content = require('../../content.json');
const navigationNodes = content.map((root) => routeToNode(root));

export const NAVIGATION_CONTENT = {
    provide: HOOK_NAVIGATOR_NODES,
    multi: true,
    useValue: { get() { return navigationNodes; } }
};

function routeToNode(route, parent?) {
    const { data } = route;

    const node = new NavigatorNode({
        label: data.title || route.path,
        priority: data.priority,
        icon: data.icon || 'no-icon',
        path: (parent && parent.path ? parent.path + '/' : '') + route.path
    });
    if (route.children) {
        route.children
            .forEach((r) => node.add(routeToNode(r, node)));
    }
    if (!parent) {
        node.path = undefined;
    }
    return node;
}

