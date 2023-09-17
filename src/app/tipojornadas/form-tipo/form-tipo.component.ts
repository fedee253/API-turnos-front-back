import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TipoJornada } from '../models/tipojornada';
import { TipoService } from '../Services/tipo.service';

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.css'],
})
export class FormTipoComponent implements OnInit {
  public formTipo!: FormGroup;
  tipo: TipoJornada = new TipoJornada();

  constructor(
    private formBuilder: FormBuilder,
    private tipoService: TipoService
  ) {}

  ngOnInit(): void {
    this.formTipo = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      minHoras: [
        '',
        [Validators.required, Validators.min(0), Validators.max(11)],
      ],
      maxHoras: [
        '',
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],

      diaLibre: ['', [Validators.required]],
    });
  }

  send(): any {
    this.tipo.nombre = this.formTipo.get('nombre')?.value;
    this.tipo.minHoras = this.formTipo.get('minHoras')?.value;
    this.tipo.maxHoras = this.formTipo.get('maxHoras')?.value;
    this.tipo.diaLibre = this.formTipo.get('diaLibre')?.value;
    this.tipoService.creartipo(this.tipo).subscribe(
      (res) => {
        Swal.fire(
          'El tipo ' + this.tipo.nombre + ' ha sido añadido correctamente.'
        );
        this.formTipo.reset();
      },
      (error) => {
        Swal.fire(error.error);
      }
    );
  }

  clean(): any {
    this.formTipo.reset();
  }
}
