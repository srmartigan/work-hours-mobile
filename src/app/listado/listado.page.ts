/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {ParteDiario} from '../interfaces/parte-diario';
import {ParteDiarioService} from '../service/parte-diario.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  parteDiario: ParteDiario[];
  mes: number;
  meses = {
    1: 'ENERO', 2: 'FEBRERO', 3: 'MARZO', 4: 'ABRIL', 5: 'MAYO', 6: 'JUNIO',
    7: 'JULIO', 8: 'AGOSTO', 9: 'SEPTIEMBRE', 10: 'OCTUBRE', 11: 'NOVIEMBRE', 12: 'DICIEMBRE'
  };

  constructor(private service: ParteDiarioService) {
    this.parteDiario = [
      {
        id: 1,
        fecha: '',
        HoraEntrada: '',
        HoraSalida: '',
        TotalHoras: '',
        userId: '',
        comida: '',
        almuerzo: '',
        merienda: '',

      }
    ]; //Inicializar objeto
    this.mes = 6; //TODO: Tiene que ser por defecto el mes actual
  };

  ngOnInit() {
    this.ObtenerParteDiariosAPI();
  }

  // obtener listado de parteDiario de una api
  ObtenerParteDiariosAPI() {
    //TODO: obtener mes seleccionado por el usuario de la API
    this.service.listarPartesDiarios(this.mes).subscribe(res => {
      this.parteDiario = res;
    }, err => {
      console.log(err);
    });
  }

  editar(id: number) {
    console.log('click con id: ' + id);
  }


}
