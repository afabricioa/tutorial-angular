import { Injectable } from '@angular/core';

import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {


    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean|UrlTree> | boolean|UrlTree {  // retorna um observable pq é um valor que pode mudar
      console.log(route);
      console.log(state);

      console.log('AlunosGuard - guard 2 de rota filha');

      // verifica se tá acessando a rota de editar pra saber se tem permissão
      // if (state.url.includes('editar')) {
      //   return false;
      // }
      return true;
    }
}
