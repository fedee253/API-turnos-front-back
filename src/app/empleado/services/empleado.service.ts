import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  endpointPost: String = 'empleados';
  endpointGetAll: String = 'empleados/todos';

  constructor(private http: HttpClient) {}

  crearemp(empleado: Empleado): Observable<Empleado> {
    let url = environment.apiTurnos + this.endpointPost;
    return this.http.post<Empleado>(url, empleado);
  }

  obtenerlista(): Observable<Array<Empleado>> {
    let url = environment.apiTurnos + this.endpointGetAll;
    return this.http.get<Array<Empleado>>(url);
  }
}
