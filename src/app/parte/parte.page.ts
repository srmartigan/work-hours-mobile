/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {ParteDiario} from '../interfaces/parte-diario';

@Component({
  selector: 'app-parte',
  templateUrl: './parte.page.html',
  styleUrls: ['./parte.page.scss'],
})
export class PartePage implements OnInit {


  fecha: Date = new Date();
  horaEntrada: string;
  horaSalida: string;
  almorzar: boolean;
  comer: boolean;
  merendar: boolean;

  constructor() {

  }

  ngOnInit() {
  }

  submit() {

    // TODO: llamar al servicio de http para guardar el parte en la base de datos
    const parteDiario: ParteDiario = this.obtenerParteDiario();
    console.log(parteDiario);

  }

  //convertir boolean a string
  booleanToString(dato: boolean): string {
    if (!dato) {
      return '0';
    }
    return '1';
  }

  private obtenerParteDiario(): ParteDiario {

    return {
      userId: '1', //TODO: cambiar por el id del usuario
      fecha: this.fecha.toString(),
      HoraEntrada: this.horaEntrada,
      HoraSalida: this.horaSalida,
      almuerzo: this.booleanToString(this.almorzar),
      comida: this.booleanToString(this.comer),
      merienda: this.booleanToString(this.merendar)
    };
  }

}
