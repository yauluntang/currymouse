import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppcommonModule } from './appcommon/appcommon.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LandingComponent } from './pages/landing/landing.component';
import { BunnydownloadComponent } from './pages/bunnydownload/bunnydownload.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'bunny', component: BunnydownloadComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    PagesModule,
    BrowserModule,
    AppcommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
