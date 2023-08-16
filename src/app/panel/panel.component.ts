import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {


  constructor(
    private router: Router,
  ) {}

  navegarBeneficio() {
    this.router.navigate(['Beneficios']);
  }

  navegarContacto() {
    this.router.navigate(['Contacto']);
  }

  navegarFactura() {
    this.router.navigate(['Facturar']);
  }

  navegarinicio() {
    this.router.navigate(['Home']);
  }
}
