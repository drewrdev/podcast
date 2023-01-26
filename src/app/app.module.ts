import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { CreateBenefitsComponent } from './pages/create-benefits/create-benefits.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PlansComponent } from './pages/plans/plans.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBenefitsComponent,
    StatisticsComponent,
    PlansComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
