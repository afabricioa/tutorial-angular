import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Fabricio', email: 'fabricio.a.s@hotmail.com'},
    {id: 2, nome: 'Nelma', email: 'nelmalayelle@gmail.com'},
    {id: 3, nome: 'Frida', email: 'fridacs@gmail.com'},
    {id: 4, nome: 'Perseu', email: 'perseu@gmail.com'}
  ];

  getAlunos() {
      return this.alunos;
  }

  getAluno(id: number) {
      let alunos = this.getAlunos();
      for (const aluno of alunos) {
          if (aluno.id == id) {
              return aluno;
          }
      }
      return null;
  }

  constructor() { }
}
