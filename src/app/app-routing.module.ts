import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  { path: 'Home', component: PanelComponent},
  { path: 'Facturar', component: FacturacionComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
