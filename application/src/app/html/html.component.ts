import { ActivatedRoute } from "@angular/router";
import { Component, Input } from "@angular/core";
import { forEach, replace, startsWith, concat } from 'lodash-es';

@Component({
    templateUrl: './html.component.html'
})

export class HtmlComponent {
    private pageHtml = '';

    get breadcrumbs() {
        return this.route.snapshot.data.breadcrumbs;
    }

    constructor(
        public route: ActivatedRoute
    ) {}

    ngOnInit() {
        fetch(this.route.snapshot.data.htmlUrl)
            .then((res) => res.text())
            .then((html) => {
                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(html, "text/html");
                const temp = this.updateAbsoluteUrls(htmlDocument);
                this.pageHtml = this.removeTopNav(temp).body.innerHTML;
            });
    }

    private removeTopNav(document) {
        this.removeDomElements(document.getElementsByClassName('main-top-bar'));
        this.removeDomElements(document.getElementsByClassName('main-nav navbar'));
        this.removeDomElements(document.getElementsByClassName('cover'));
        return document;
    }

    private removeDomElements(elementsToRemove) {
        forEach(elementsToRemove, (el) => el.remove());
    }

    private updateAbsoluteUrls(document) {
        const linkElements = document.getElementsByTagName('a');
        const imgElements = document.getElementsByTagName('img');

        this.replaceLinks(linkElements, 'href', '/guides',  '#/guides');
        this.replaceLinks(imgElements, 'src', '/guides/',  'guides/');
        return document;
    }

    private replaceLinks(elements, attribute, oldVal, newVal) {
        forEach(elements, (el) => {
            const link = (el.getAttribute(attribute));
            if(startsWith(link, oldVal)) {
                el.setAttribute(attribute, replace(link, oldVal, newVal));
            }
        });
    }
}