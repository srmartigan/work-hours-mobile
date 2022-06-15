/* eslint-disable max-len */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ParteDiario} from "../interfaces/parte-diario";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ParteDiarioService {

  //TODO: obtener token de usuario por localStorage después de login
  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJqb25hdGFuQHlvZGl0YW4uY29tIiwicm9sIjoidXN1YXJpbyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwfQ.Q8zamfzuTJGwnHA1IBEQOVSE5R4oKsPUpPYyj7IuLqE';

  constructor(public http: HttpClient) {
  }

  listarPartesDiarios(mes: number): Observable<any> {
    const url = 'https://diversoft-game.es/parte-diario/backend/public/api/listado_partes';
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJqb25hdGFuQHlvZGl0YW4uY29tIiwicm9sIjoidXN1YXJpbyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwfQ.Q8zamfzuTJGwnHA1IBEQOVSE5R4oKsPUpPYyj7IuLqE');

    const datos = {
      id: 2, //TODO: obtener id de usuario por localStorage después de login
      mes
    };

    const params = 'json=' + JSON.stringify(datos);

    return this.http.post<any>(url, 'id=2', {headers}).pipe(
      map(res => res.json));
  }

}
