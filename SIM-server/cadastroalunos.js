"use strict";
exports.__esModule = true;
var aluno_1 = require("../SIM-app/src/app/alunos/aluno");
var CadastroDeAlunos = /** @class */ (function () {
    function CadastroDeAlunos() {
        this.alunos = [];
    }
    CadastroDeAlunos.prototype.criar = function (aluno) {
        var result = null;
        if (this.loginNaoCadastrado(aluno.login)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    };
    CadastroDeAlunos.prototype.loginNaoCadastrado = function (login) {
        return !this.alunos.find(function (a) { return a.login == login; });
    };
    CadastroDeAlunos.prototype.atualizar = function (aluno) {
        var result = this.alunos.find(function (a) { return a.login == aluno.login; });
        if (result) {
            result.copyFrom(aluno);
            var verificacao = result.verificaAluno();
            console.log(verificacao);
        }
        return result;
    };
    CadastroDeAlunos.prototype.getAlunos = function () {
        return this.alunos;
    };
    return CadastroDeAlunos;
}());
exports.CadastroDeAlunos = CadastroDeAlunos;
