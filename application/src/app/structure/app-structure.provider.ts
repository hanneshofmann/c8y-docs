import {Injectable} from '@angular/core';

export const pathToContent = 'assets/content.json';

@Injectable()
export class AppStructureProvider {

    private appStructure: Array<Object> = null;

    constructor() {

    }

    public getAppStructure(): Array<Object> {
        return this.appStructure;
    }

    async load() {
        const content = (await fetch(pathToContent)
            .then((res) => res.text()));
        this.appStructure = JSON.parse(content);
    }
}