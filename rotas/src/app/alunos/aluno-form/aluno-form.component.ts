import { IFormCanDeactivate } from './../../guards/iform.candeactivate';
import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou = false;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe(
          (params: any) => {
              let id = params.id;

              this.aluno = this.alunosService.getAluno(id);

              if (this.aluno == null) {
                this.aluno = {};
              }
          }
      );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
        confirm('Tem certeza que deseja sair da página?');
    }

    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
