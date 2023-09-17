import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jornada } from '../models/jornada';

@Injectable({
  providedIn: 'root',
})
export class JornadaService {

  endpointPost: String = 'jornadas';
  endpointGetAll: String = 'jornadas/todas'
  constructor(private http: HttpClient) {}

  crearjor(jornada: Jornada): Observable<Jornada> {
    let url = environment.apiTurnos + this.endpointPost;
    return this.http.post<Jornada>(url, jornada);
  }

  obtenerlista(): Observable<Array<Jornada>> {
    let url = environment.apiTurnos + this.endpointGetAll;
    return this.http.get<Array<Jornada>>(url);
  }

}
