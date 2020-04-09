import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing.module';

// import { RouterModule } from '@angular/router';

import { CursosService } from './cursos.service';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { PaginaNotfoundComponent } from './pagina-notfound/pagina-notfound.component';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    PaginaNotfoundComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
    // RouterModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
