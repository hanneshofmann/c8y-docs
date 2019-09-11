import { Component } from '@angular/core';
import { AppStateService } from "@c8y/ngx-components";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(
        public state: AppStateService
    ) {}
}