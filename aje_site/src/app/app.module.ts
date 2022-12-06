import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtntalkComponent } from './btntalk/btntalk.component';
import { BannerComponent } from './banner/banner.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BtntalkComponent,
    BannerComponent,
    ServiceComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BtntalkComponent
  ]
})
export class AppModule { }
