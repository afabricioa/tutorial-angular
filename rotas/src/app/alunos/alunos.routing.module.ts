import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoNotfoundComponent } from './aluno-notfound/aluno-notfound.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent,
      // canActivateChild: [AlunosGuard] pode ser utilizado aqui para ficar apenas nesse escopo
      children: [ // criando rotas filhas para aparecer dois components na pagina
        { path: 'novo', component: AlunoFormComponent }, // tudo que é hard coded precisa vir primeiro de parametros
        {
            path: 'alunoNotFound', component: AlunoNotfoundComponent,
            canDeactivate: [AlunosDeactivateGuard]    // desativa a rota que estava caso haja alguma mudança de rota
        },
        {
          path: ':id', component: AlunoDetalheComponent,
          resolve: { aluno: AlunoDetalheResolver }  // resolver carrega os dados do component antes do mesmo ser carregado
        },                                          // economiza tempo de carregamento
        {
            path: ':id/editar', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)], // em rotas filhas utiliza o forChild ao invés do forRoot
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
