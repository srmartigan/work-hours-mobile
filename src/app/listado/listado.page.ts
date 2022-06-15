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
    ];
  };

  ngOnInit() {
    this.ObtenerParteDiariosAPI();
  }

  // obtener listado de parteDiario de una api
  ObtenerParteDiariosAPI() {
    //TODO: obtener listado de parteDiario de una api
    this.service.listarPartesDiarios(6).subscribe(res => {
      this.parteDiario = res;
      // res.json.forEach(element => {
      //   this.parteDiario.push(element);
      // });
      console.log(this.parteDiario);
    }, err => {
      console.log(err);
    });
  }

  editar(id: number) {
    console.log('click con id: ' + id);
  }


}
