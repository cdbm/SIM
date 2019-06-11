import {Sub} from "../SIM-app/src/app/feedback/sub";
export class CadastroSubs {
    subs: Sub[] = [];
  
    criar(sub: Sub): Sub {
        this.subs.push(sub);
        return sub;
    }

    atualizar(sub: Sub): Sub {
        var result: Sub = this.subs.find(a => a.aluno == sub.aluno);
        if (result) {
            result.nota = sub.nota;
            result.feedback = sub.feedback;
        };
        return result;
    }

    getSubs(): Sub[] {
        return this.subs;
      }
  }