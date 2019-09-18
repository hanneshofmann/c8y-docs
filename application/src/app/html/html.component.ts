import {ActivatedRoute} from "@angular/router";
import {Component, ElementRef, Renderer2} from "@angular/core";
import {forEach, replace, startsWith, concat} from 'lodash-es';

@Component({
    templateUrl: './html.component.html'
})

export class HtmlComponent {

    get breadcrumbs() {
        return this.route.snapshot.data.breadcrumbs;
    }

    constructor(
        private route: ActivatedRoute,
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) {
    }

    async ngOnInit() {
        const html = (await fetch(this.route.snapshot.data.htmlUrl)
            .then((res) => res.text()));

        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(html, "text/html");
        const searchEl = htmlDocument.getElementById('filter-devices');
        if (searchEl) {
            searchEl.remove();
        }
        const pageContent = this.updateAbsoluteUrls(htmlDocument).getElementsByClassName('main-content');
        this.renderer.appendChild(this.elementRef.nativeElement, pageContent[0]);
    }

    private updateAbsoluteUrls(document) {
        const linkElements = document.getElementsByTagName('a');
        const imgElements = document.getElementsByTagName('img');

        this.replaceLinks(linkElements, 'href', '/guides', '#/');
        this.replaceLinks(imgElements, 'src', '/guides/', '');
        return document;
    }

    private replaceLinks(elements, attribute, oldVal, newVal) {
        forEach(elements, (el) => {
            const link = (el.getAttribute(attribute));
            if (startsWith(link, oldVal)) {
                el.setAttribute(attribute, replace(link, oldVal, newVal));
            }
        });
    }
}