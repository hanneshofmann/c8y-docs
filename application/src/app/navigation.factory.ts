import {NavigatorNode, NavigatorNodeFactory} from '@c8y/ngx-components';
import {AppStructureProvider} from './structure/app-structure.provider';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {remove, includes} from 'lodash-es';
import {RouteElement} from "./route-element";


@Injectable()
export class HookNavigatorNodesFactory implements NavigatorNodeFactory {

    constructor(public router: Router,
                private appStructureProvider: AppStructureProvider) {
    }

    navigation = this.getNavigationNodes();

    get(): Array<NavigatorNode> {
        return this.navigation;
    }

    getNavigationNodes(): Array<NavigatorNode> {
        const appStructure: Array<RouteElement> = this.appStructureProvider.getAppStructure();
        remove(appStructure, (el) => {
            return includes('release-notes', el.path);
        });
        return appStructure.map((root) => this.routeToNode(root));
    }

    routeToNode(route: RouteElement, parent?: NavigatorNode): NavigatorNode  {
        const {data} = route;

        const node: NavigatorNode = new NavigatorNode({
            label: data.title || route.path,
            priority: data.priority,
            icon: data.icon || 'no-icon',
            path: route.path
        });

        if (route.children) {
            route.children
                .forEach((r) => node.add(this.routeToNode(r, node)));
        }
        if (!parent) {
            node.path = undefined;
        }

        return node;
    }
}




