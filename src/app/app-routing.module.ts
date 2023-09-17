import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListaEmpleadosComponent } from './empleado/lista-empleados/lista-empleados.component';
import { HomeComponent } from './home/home.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { ListaJornadasComponent } from './jornadas/lista-jornadas/lista-jornadas.component';
import { ListaTiposComponent } from './tipojornadas/lista-tipos/lista-tipos.component';
import { TipojornadasComponent } from './tipojornadas/tipojornadas.component';

const routes: Routes = [
  {
    path: 'empleado/alta',
    component: EmpleadoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'jornada/alta',
    component: JornadasComponent,
  },
  {
    path: 'empleado/lista',
    component: ListaEmpleadosComponent,
  },
  {
    path: 'jornada/lista',
    component: ListaJornadasComponent,
  },
  {
    path: 'tipo/lista',
    component: ListaTiposComponent,
  },  
  {
    path: 'tipo/alta',
    component: TipojornadasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
