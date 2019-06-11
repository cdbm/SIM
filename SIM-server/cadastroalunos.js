"use strict";
exports.__esModule = true;
var aluno_1 = require("../SIM-app/src/app/alunos/aluno");
var CadastroAlunos = /** @class */ (function () {
    function CadastroAlunos() {
        this.alunos = [];
    }
    CadastroAlunos.prototype.criar = function (aluno) {
        var result = null;
        if (this.loginNaoCadastrado(aluno.login)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    };
    CadastroAlunos.prototype.loginNaoCadastrado = function (login) {
        return !this.alunos.find(function (a) { return a.login == login; });
    };
    CadastroAlunos.prototype.atualizar = function (aluno) {
        var result = this.alunos.find(function (a) { return a.login == aluno.login; });
        if (result)
            result.copyFrom(aluno);
        return result;
    };
    CadastroAlunos.prototype.getAlunos = function () {
        return this.alunos;
    };
    return CadastroAlunos;
}());
exports.CadastroAlunos = CadastroAlunos;
