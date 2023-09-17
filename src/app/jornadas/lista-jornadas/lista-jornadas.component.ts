import { Component, OnInit } from '@angular/core';
import { Jornada } from '../models/jornada';
import { JornadaService } from '../services/jornada.service';

@Component({
  selector: 'app-lista-jornadas',
  templateUrl: './lista-jornadas.component.html',
  styleUrls: ['./lista-jornadas.component.css']
})
export class ListaJornadasComponent implements OnInit {

  listaJornadas: Array<Jornada> =[];
  constructor(private jornadaService: JornadaService) { }

  ngOnInit(): void {
    this.jornadaService.obtenerlista().subscribe(res => {
      this.listaJornadas = res;
      console.log(this.listaJornadas);
    })
  }

}
