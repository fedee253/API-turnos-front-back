import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { JornadaService } from '../services/jornada.service';
import { Jornada } from '../models/jornada';

@Component({
  selector: 'app-form-jornada',
  templateUrl: './form-jornada.component.html',
  styleUrls: ['./form-jornada.component.css'],
})
export class FormJornadaComponent implements OnInit {
  public formJornada!: FormGroup;
  jornada: Jornada = new Jornada();

  constructor(
    private formBuilder: FormBuilder,
    private jornadaService: JornadaService
  ) {}

  ngOnInit(): void {
    this.formJornada = this.formBuilder.group({
      idEmpleado: ['', [Validators.required, Validators.min(1)]],
      tipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      horaEntrada: ['', [Validators.required, Validators.min(0)]],
      horaSalida: ['', [Validators.required, Validators.min(1)]],
      fechaIngreso: ['', [Validators.required]],
    });
  }

  send(): any {
    this.jornada.idEmpleado = this.formJornada.get('idEmpleado')?.value;
    this.jornada.tipo = this.formJornada.get('tipo')?.value;
    this.jornada.fechaIngreso = this.formJornada.get('fechaIngreso')?.value;
    this.jornada.horaEntrada = this.formJornada.get('horaEntrada')?.value;
    this.jornada.horaSalida = this.formJornada.get('horaSalida')?.value;

    this.jornadaService.crearjor(this.jornada).subscribe(
      (res) => {
        Swal.fire('La jornada ha sido añadida correctamente.');
        this.formJornada.reset();
      },
      (error) => {
        Swal.fire(error.error);
      }
    );
  }

  clean(): any {
    this.formJornada.reset();
  }
}
