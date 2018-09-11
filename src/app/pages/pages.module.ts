import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BunnydownloadComponent } from './bunnydownload/bunnydownload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent,
    BunnydownloadComponent
  ],
  declarations: [LandingComponent, BunnydownloadComponent]
})
export class PagesModule { }
