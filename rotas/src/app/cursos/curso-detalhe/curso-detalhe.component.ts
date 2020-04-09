import { CursosService } from '../cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;
  constructor(private route: ActivatedRoute, private cursosService: CursosService, private router: Router) {
      // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
      this.inscricao = this.route.params.subscribe(    // retorna um BehaviorSubject que fica todo tempo verificando mudança na página
        (params: any) => {
          this.id = params.id;     // usa o activated route para acessar os parametros e pegar o ID do input através do roteament

          this.curso = this.cursosService.getCurso(this.id);
          console.log(this.curso);
          if (this.curso == null) {
              this.router.navigate(['cursos/paginaNotFound']);
          }
        }
      );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();   // destroi a inscrição do params que inicializada no OnInit, boa prática
  }

}
