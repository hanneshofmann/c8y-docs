import {NavigatorNode, NavigatorNodeFactory} from '@c8y/ngx-components';
import {AppStructureProvider} from './structure/app-structure.provider';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {remove, includes} from 'lodash-es';


@Injectable()
export class HookNavigatorNodesFactory implements NavigatorNodeFactory {

    constructor(public router: Router,
                private appStructureProvider: AppStructureProvider) {
    }

    get() {
        return this.getNavigationNodes();
    }

    getNavigationNodes() {
        const appStructure = this.appStructureProvider.getAppStructure();
        remove(appStructure, (el) => {
            return includes('release-notes', el.path);
        });
        return appStructure.map((root) => this.routeToNode(root));
    }

    routeToNode(route, parent?) {
        const {data} = route;

        const node = new NavigatorNode({
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




