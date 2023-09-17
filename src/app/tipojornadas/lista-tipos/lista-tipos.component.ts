import { Component, OnInit } from '@angular/core';
import { TipoJornada } from '../models/tipojornada';
import { TipoService } from '../Services/tipo.service';

@Component({
  selector: 'app-lista-tipos',
  templateUrl: './lista-tipos.component.html',
  styleUrls: ['./lista-tipos.component.css'],
})
export class ListaTiposComponent implements OnInit {
  listaTipos: Array<TipoJornada> = [];
  constructor(private tipoService: TipoService) {}

  ngOnInit(): void {
    this.tipoService.obtenerlista().subscribe((res) => {
      this.listaTipos = res;
    });
  }
}
