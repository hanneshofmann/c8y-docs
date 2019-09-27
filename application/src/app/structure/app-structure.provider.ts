import {Injectable} from '@angular/core';
import {RouteElement} from '../route-element';

export const pathToContent = 'assets/content.json';

@Injectable()
export class AppStructureProvider {

    private appStructure: Array<RouteElement> = null;

    constructor() {

    }

    public getAppStructure(): Array<RouteElement> {
        return this.appStructure;
    }

    async load() {
        this.appStructure = await (await fetch(pathToContent)).json();
    }
}