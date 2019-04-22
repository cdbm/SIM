export class Aluno {
  nome: string;
  login: string;
  criterios: Map<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.login = "";
    this.criterios = new Map<string,string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.criterios = new Map<string,string>();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.login = from.login;
    this.copyCriteriosFrom(from.criterios);
  }

  copyCriteriosFrom(from: Map<string,string>): void {
    this.criterios = new Map<string,string>();
    for (let key in from) {
      this.criterios[key] = from[key];
    }
  }
}