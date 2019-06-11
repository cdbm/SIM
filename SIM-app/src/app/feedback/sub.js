"use strict";
exports.__esModule = true;
var Sub = /** @class */ (function () {
    function Sub(aluno, questao, descrição, lista, código) {
        this.aluno = aluno;
        this.questao = questao;
        this.descricao = descrição;
        this.lista = lista;
        this.codigo = código;
        this.feedback = "";
        this.nota = 0;
    }
    Sub.prototype.copyFrom = function (from) {
        this.aluno = from.aluno;
        this.questao = from.questao;
        this.descricao = from.descricao;
        this.lista = from.lista;
        this.codigo = from.codigo;
        this.feedback = from.feedback;
        this.nota = from.nota;
    };
    return Sub;
}());
exports.Sub = Sub;
