import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: "root-cmp",
  template: "<div>Test</div>"
})
export class rootComponent {}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [rootComponent],
  bootstrap: [rootComponent]
})
export class AppModule {
  constructor() { 
    console.log("inside constructor");
  }
  ngDoBootstrap() {
    console.log("bootstraping app");
    //this.upgrade.bootstrap(document.body, ['D2DAPP']);
  }
}