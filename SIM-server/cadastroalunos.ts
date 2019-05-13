import { Aluno } from '../SIM-app/src/app/alunos/aluno';

export class CadastroAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.loginNaoCadastrado(aluno.login)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  loginNaoCadastrado(login: string): boolean {
     return !this.alunos.find(a => a.login == login);
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.login == aluno.login);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}

