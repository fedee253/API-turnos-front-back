import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { FormEmpleadoComponent } from './empleado/form-empleado/form-empleado.component';
import { HttpClientModule } from '@angular/common/http';
import { JornadasComponent } from './jornadas/jornadas.component';
import { FormJornadaComponent } from './jornadas/form-jornada/form-jornada.component';
import { ListaEmpleadosComponent } from './empleado/lista-empleados/lista-empleados.component';
import { ListaJornadasComponent } from './jornadas/lista-jornadas/lista-jornadas.component';
import { TipojornadasComponent } from './tipojornadas/tipojornadas.component';
import { ListaTiposComponent } from './tipojornadas/lista-tipos/lista-tipos.component';
import {FormTipoComponent} from "./tipojornadas/form-tipo/form-tipo.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    FormEmpleadoComponent,
    JornadasComponent,
    FormJornadaComponent,
    ListaEmpleadosComponent,
    ListaJornadasComponent,
    TipojornadasComponent,
    ListaTiposComponent,
    FormTipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
