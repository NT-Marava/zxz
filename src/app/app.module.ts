import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SwiperDirective } from 'src/directives/swiper.directive';
import { RequesthandlerService } from 'src/services/requesthandler.service';

import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { HeaderComponent } from './pages/partials/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { MinistryComponent } from './pages/ministry/ministry.component';


register();
@NgModule({
  declarations: [
    SwiperDirective,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MinistryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'ministry', component: MinistryComponent },
     // { path: 'ministry', component: MinistryComponent }
    ])
  ],
  providers: [HttpClientModule, RequesthandlerService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
