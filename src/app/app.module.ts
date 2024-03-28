import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PanelComponent } from './panel/panel.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';


@NgModule({
  declarations: [
    AppComponent,
    FacturacionComponent,
    PanelComponent,
    ContactoComponent,
    BeneficiosComponent,
    CotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCaptchaModule,
    CommonModule,
    ReactiveFormsModule



  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
