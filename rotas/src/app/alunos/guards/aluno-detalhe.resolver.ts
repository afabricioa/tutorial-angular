import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
// resolver(guarda de rota) que carrega o objeto antes do component ser carregado
// melhora no tempo de carregamento

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {}

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    console.log('AlunoDetalheResolver - carrega os dados anteriormente');
    let id = route.params.id;
    return this.alunosService.getAluno(id);
  }
}
