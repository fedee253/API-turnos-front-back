import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit {
  listaEmpleados: Array<Empleado> = [];
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.obtenerlista().subscribe((res) => {
      this.listaEmpleados = res;
      console.log(this.listaEmpleados);
    });
  }
}
