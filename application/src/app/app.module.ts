import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule, CommonModule } from '@c8y/ngx-components';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { NAVIGATION_CONTENT } from './navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes = [
    {
      path: '',
      component: HomeComponent
    }
];

@NgModule({
  declarations: [ AppComponent, HomeComponent, HtmlComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
    CoreModule.forRoot(),
    NgCommonModule,
    CoreModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [ NAVIGATION_CONTENT ],
  bootstrap: [ AppComponent ],
  entryComponents: [ HtmlComponent ]
})
export class AppModule {}
