import { CursosService } from './cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
      this.cursos = this.cursosService.getCursos();

      this.inscricao = this.route.queryParams.subscribe(
        (parametros: any) => {
          this.pagina = parametros['pagina'];   // recebendo o valor da página através do queryparams que é passado pelo html
        }
      );
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
      this.router.navigate(['/cursos'],
      { queryParams: {pagina: ++this.pagina}}); // incrementando o valor da página, passando através do queryparams para a variável no URL
  }
}
