import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoJornada } from '../models/tipojornada';

@Injectable({
  providedIn: 'root',
})
export class TipoService {
  endpointPost: String = 'tipos';
  endpointGetAll: String = 'tipos/todos';
  constructor(private http: HttpClient) {}

  obtenerlista(): Observable<Array<TipoJornada>> {
    let url = environment.apiTurnos + this.endpointGetAll;
    return this.http.get<Array<TipoJornada>>(url);
  }

  creartipo(tipo: TipoJornada): Observable<TipoJornada> {
    let url = environment.apiTurnos + this.endpointPost;
    return this.http.post<TipoJornada>(url, tipo);
  }
}
