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

  calcularCotizacion(): void {
    const llegadaDate = new Date(this.llegada);
    const salidaDate = new Date(this.salida);
    const diferencia = salidaDate.getTime() - llegadaDate.getTime();
    const horas = diferencia / (1000 * 60 * 60);
    const diasCobrar = Math.ceil(horas / 24);
    let subtotal = 0;
    const tarifaRegular = 210;
    const descuentoPorSemana = 170;

    for (let hora = 0; hora < horas; hora++) {
      // Aplicar tarifa regular y ajuste por cada hora
      subtotal += tarifaRegular + 30;

      // Reiniciar las horas al final de cada día y aplicar ajustes especiales cada 7 días
      if ((hora + 1) % 24 === 0) {
        if (diasCobrar % 7 === 0 && diasCobrar !== 0) {
          subtotal += 180; // Ajuste especial por cada semana
        }
        hora = 23; // Avanza directamente al final del día
      }
    }

    // Calcular el descuento por semanas completas y ajustar la cotización final
    const semanasCompletas = Math.floor(diasCobrar / 7);
    this.cotizacion = subtotal - semanasCompletas * descuentoPorSemana;
  }
}
