import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent {
  llegada: string;
  salida: string;
  cotizacion: number;

  constructor() {
    this.llegada = '';
    this.salida = '';
    this.cotizacion = 0;
  }

  // calcularCotizacion(): void {
  //   const llegadaDate = new Date(this.llegada);
  //   const salidaDate = new Date(this.salida);
  //   const diferencia = salidaDate.getTime() - llegadaDate.getTime();
  //   const dias = diferencia / (1000 * 60 * 60 * 24);
  //   const diasCobrar = Math.ceil(dias);
  //   this.cotizacion = diasCobrar * 210;
  // }
  calcularCotizacion(): void {
    const llegadaDate = new Date(this.llegada);
    const salidaDate = new Date(this.salida);
    const diferencia = salidaDate.getTime() - llegadaDate.getTime();
    const dias = diferencia / (1000 * 60 * 60 * 24);
    const diasCobrar = Math.ceil(dias);
  
    // Definir la tarifa regular y el descuento
    const tarifaRegular = 210;
    const descuentoPorSemana = 170;
  
    // Calcular cuántas semanas completas están incluidas
    const semanasCompletas = Math.floor(dias / 7);
  
    // Calcular la cotización total
    this.cotizacion = (diasCobrar * tarifaRegular) - (semanasCompletas * descuentoPorSemana);
  }
  
}
