import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    aluno = aluno.clone();
    var result = null;
    if (this.loginNaoCadastrado(aluno.login)) {
      this.alunos.push(aluno);
      result = aluno;
    }
    return result;
  }

  loginNaoCadastrado(login: string): boolean {
     return !this.alunos.find(a => a.login == login);
  }

  atualizar(aluno: Aluno): void {
    aluno = aluno.clone();
    for (let a of this.alunos) {
        if (a.login == aluno.login) {
           a.metas = aluno.metas;
        }
    }
  }

  getAlunos(): Aluno[] {
    var result: Aluno[] = [];
    for (let a of this.alunos) {
      result.push(a.clone());
    }
    return result;
  }
}