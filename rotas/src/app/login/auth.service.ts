import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();
  private usuarioAutenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  verificarLogin(usuario: Usuario) {
      if (usuario.nome === 'usuario@gmail.com' &&
          usuario.senha === '123456') {

          this.usuarioAutenticado = true;
          this.mostrarMenuEmitter.emit(true); // emite o valor de true
          this.router.navigate(['/']);
      } else {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
