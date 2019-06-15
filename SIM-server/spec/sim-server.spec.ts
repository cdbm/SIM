import 'jasmine';
import request = require("request-promise");

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../sim-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista de submissões vazia", () => {
    return request.get(base_url + "subs").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("só insere submissões", () => {
    var options:any = {method: 'POST', uri: (base_url + "sub"), body:{}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({failure: "A submissão não pode ser atualizada"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

  it("atualiza submissões corretamente", () => {
    return request.post(base_url + "sub", {"json":{"aluno": "Manoel Silva", "questao" : 1, "lista": 2, "nota": 10, "feedback": "ok", "codigo": "", "descricao": ""}}).then(body => {
         expect(body).toEqual({success: "Submissão criada com sucesso"});
         return request.put(base_url + "sub", {"json":{"aluno": "Danilo Silva", "questao" : 1, "lista": 2, "nota": 10, "feedback": "ok", "codigo": "", "descricao": ""}}).then(body => {
             expect(body).toEqual({"success": "A submissão foi atualizada com sucesso"});
             return request.get(base_url + "subs").then(body => {
                 expect(body).not.toContain('{"aluno": "Manoel Silva", "questao" : 1, "lista": 2, "nota": 10, "feedback": "ok", "codigo": "", "descricao": ""}');
                 expect(body).toContain('{"aluno": "Danilo Silva", "questao" : 1, "lista": 2, "nota": 10, "feedback": "ok", "codigo": "", "descricao": ""}');
             });
         });
     });
  });

})