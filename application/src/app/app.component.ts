import {Component} from '@angular/core';
import {NavigatorService, HeaderService, NavigatorNode, BreadcrumbService, AppStateService} from '@c8y/ngx-components';
import {Router} from '@angular/router';
import {getBreadcrumbs, getTopTitle} from './utils';
import {HtmlComponent} from './html/html.component';
import {get, assign} from 'lodash-es';
import {AppStructureProvider} from "./structure/app-structure.provider";

@Component({
    selector: 'c8y-bootstrap',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(
        private ui: AppStateService,
        private navigator: NavigatorService,
        private headerService: HeaderService,
        private breadcrumbService: BreadcrumbService,
        private router: Router,
        private appStructureProvider: AppStructureProvider
    ) {
        headerService.toggleNavigator();
        addHomeNode();

        const content = this.appStructureProvider.getAppStructure();
        const routes = content.reduce(reduceRoutes, []);
        resetConfig(routes);

        function addHomeNode() {
            navigator.add(new NavigatorNode({
                label: 'Home',
                path: '',
                icon: 'home',
                priority: 100
            }));
        }

        function reduceRoutes(routes, page) {
            if (page.children) {
                page.children.forEach((p) => {
                    p.parent = page;
                });
            }
            if (page.parent) {
                routes.push({
                    path: page.path || '',
                    data: {
                        breadcrumbs: getBreadcrumbs(page),
                        topTitle: getTopTitle(page),
                        htmlUrl: page.path + '/index.html'
                    },
                    component: HtmlComponent
                });
            }
            if (page.children) {
                return page.children.reduce(reduceRoutes, routes);
            }
            return routes;
        }

        function resetConfig(newRoutesConfig): void {
            const existingRoutes = router.config;
            router.resetConfig(existingRoutes.concat(newRoutesConfig));
        }
    }
}