import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { PaginaNotfoundComponent } from './pagina-notfound/pagina-notfound.component';
import { CursosComponent } from './cursos.component';


const cursosRoutes: Routes = [
  { path: '', component: CursosComponent , children: [
    { path: 'paginaNotFound', component: PaginaNotfoundComponent },
    { path: ':id', component: CursoDetalheComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], // em rotas filhas utiliza o forChild ao invés do forRoot
  exports: [RouterModule]
})
export class CursosRoutingModule { }
