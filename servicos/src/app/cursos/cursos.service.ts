import { LogService } from './../shared/log.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'Java', 'Php'];
  constructor(private logService: LogService) { }

  getCursos() {
    this.logService.consoleLog('Curso recebidos com sucesso!');
    return this.cursos;
  }

  addCurso(curso) {
    this.logService.consoleLog('Curso adicionado com sucesso: ' + curso);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
}
