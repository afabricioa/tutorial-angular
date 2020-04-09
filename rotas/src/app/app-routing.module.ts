import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { PaginaNotfoundComponent } from './cursos/pagina-notfound/pagina-notfound.component';

// 1 passo - colocar o nome e caminho do modulo#nomedomodulo
// 2 passo - deixar import do module apenas em app routing
// 3 passo - apagar nome da rota em cursosrouting e deixar vazio
const routes: Routes = [
  { path: 'cursos',
      loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), // carrega o módulo para usar rotas filhas
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
  },
  {
      path: 'alunos',
      loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
      canActivate: [AuthGuard], // verifica se pode ativar a rota AuthGuard(se tiver logado)
      // verifica se pode ativar as rotas filho, se usuario tem permissão pra ir em alunos
      canActivateChild: [AlunosGuard],   // se quer atribuir para componentes pai e filho então usa aqui
                                        // se for pra atribuir apenas para filhos então usa no modulo dele
      canLoad: [AuthGuard]              // verifica se pode acessar o codigo do modulo caso esteja logado
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: PaginaNaoEncontradaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
