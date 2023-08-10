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

  navegarFactura() {
    this.router.navigate(['Facturar']);
  }

  navegarinicio() {
    this.router.navigate(['Home']);
  }
}
