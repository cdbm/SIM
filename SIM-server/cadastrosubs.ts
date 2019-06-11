import {Sub} from "../SIM-app/src/app/feedback/sub";
export class CadastroSubs {
    subs: Sub[] = [];
  
    criar(sub: Sub): Sub {
        this.subs.push(sub);
        return sub;
    }

    getSubs(): Sub[] {
        return this.subs;
      }
  }