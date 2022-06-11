import { Component, OnInit } from '@angular/core';

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
    this.almorzar = false;
    this.comer = false;
    this.merendar = false;
  }

  ngOnInit() {
  }

  submit() {
    this.comprobarBooleanNoUndefined();
    console.log(this.fecha);
    console.log(this.horaEntrada);
    console.log(this.horaSalida);
    console.log(this.almorzar);
    console.log(this.comer);
    console.log(this.merendar);
  }

  comprobarBooleanNoUndefined() {
    if (this.almorzar === undefined) {
      this.almorzar = false;
    }
    if (this.comer === undefined) {
      this.comer = false;
    }
    if (this.merendar === undefined) {
      this.merendar = false;
    }
  }

}
