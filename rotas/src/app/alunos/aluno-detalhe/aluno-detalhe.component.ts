import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      // this.inscricao = this.route.params.subscribe(
      //     (params: any) => {
      //         this.id = params.id;

      //         this.aluno = this.alunosService.getAluno(this.id);
      //         console.log(this.aluno);

      //         if (this.aluno == null) {
      //             this.router.navigate(['/alunos/alunoNotFound']);
      //         }
      //     }
      // );

      console.log('ngInit: AlunoDetalheComponent');
      this.inscricao = this.route.data.subscribe(
        (info) => {
          console.log('Recebendo o obj aluno do resolver');
          this.aluno = info.aluno; // aluno foi o nome dado no resolver em routing module aluno
        }
      );
  }

  editarAluno() {
      this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
