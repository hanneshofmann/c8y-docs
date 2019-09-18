import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule as NgCommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreModule, CommonModule, HOOK_NAVIGATOR_NODES} from '@c8y/ngx-components';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {HtmlComponent} from './html/html.component';
import {HookNavigatorNodesFactory} from './navigation.factory';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppStructureProvider} from './structure/app-structure.provider';
import {AppStructureFactory} from "./structure/app-structure.factory";


const routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [AppComponent, HomeComponent, HtmlComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {enableTracing: false, useHash: true}),
        CoreModule.forRoot(),
        NgCommonModule,
        CoreModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [],
    providers: [
        AppStructureProvider,
        {provide: APP_INITIALIZER, useFactory: AppStructureFactory, deps: [AppStructureProvider], multi: true},
        {provide: HOOK_NAVIGATOR_NODES, useClass: HookNavigatorNodesFactory, multi: true}
    ],
    bootstrap: [AppComponent],
    entryComponents: [HtmlComponent]
})
export class AppModule {
}
