import {HOOK_NAVIGATOR_NODES, NavigatorNode} from '@c8y/ngx-components';
import {getAppStructure} from "./utils";

export const NAVIGATION_CONTENT = {
    provide: HOOK_NAVIGATOR_NODES,
    multi: true,
    useValue: {
        async get() {
            return await getNavigationNodes();
        }
    }
};

async function getNavigationNodes() {
    return (await getAppStructure()).map((root) => routeToNode(root));
}

function routeToNode(route, parent?) {
    const {data} = route;

    const node = new NavigatorNode({
        label: data.title || route.path,
        priority: data.priority,
        icon: data.icon || 'no-icon',
        path: route.path
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

