import { AuthService } from '../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
        private authService: AuthService,
        private router: Router
    ) { }

  verificarAcesso() {
      if (this.authService.usuarioEstaAutenticado()) {
        return true;    // retorna true se o usuário pode acessar a rota e false se não
      }

      this.router.navigate(['/login']);

      return false;
  }
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean|UrlTree> | boolean|UrlTree {  // retorna um observable pq é um valor que pode mudar
      console.log('AuthGuard - guard 1');

      return this.verificarAcesso();
  }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad verifica se pode fazer acessar o modulo');
      return this.verificarAcesso();
    }
}
