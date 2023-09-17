import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css'],
})
export class FormEmpleadoComponent implements OnInit {
  public formEmpleado!: FormGroup;

  empleado: Empleado = new Empleado();

  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.formEmpleado = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      dni: [
        '',
        [
          Validators.required,
          Validators.max(99999999),
          Validators.min(1000000),
        ],
      ],
    });
  }

  send(): any {
    this.empleado.name = this.formEmpleado.get('name')?.value;
    this.empleado.lastname = this.formEmpleado.get('lastname')?.value;
    this.empleado.dni = this.formEmpleado.get('dni')?.value;
    this.empleadoService.crearemp(this.empleado).subscribe(
      (res) => {
        Swal.fire(
          'El empleado ' +
            this.empleado.name +
            ' ' +
            this.empleado.lastname +
            ' ha sido añadido correctamente.'
        );
        this.formEmpleado.reset();
      },
      (error) => {
        Swal.fire(error.error);
      }
    );
  }

  clean(): any {
    this.formEmpleado.reset();
  }
}
