import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BunnydownloadComponent } from './bunnydownload/bunnydownload.component';
import { BunnyprivacyComponent } from './bunnyprivacy/bunnyprivacy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent,
    BunnydownloadComponent,
    BunnyprivacyComponent
  ],
  declarations: [LandingComponent, BunnydownloadComponent, BunnyprivacyComponent]
})
export class PagesModule { }
