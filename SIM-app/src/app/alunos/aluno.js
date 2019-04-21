"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.clean();
    }
    Aluno.prototype.clean = function () {
        this.nome = "";
        this.login = "";
        this.criterios = new Map();
    };
    Aluno.prototype.clone = function () {
        var aluno = new Aluno();
        aluno.criterios = new Map();
        aluno.copyFrom(this);
        return aluno;
    };
    Aluno.prototype.copyFrom = function (from) {
        this.nome = from.nome;
        this.login = from.login;
        this.copyCriteriosFrom(from.criterios);
    };
    Aluno.prototype.copyCriteriosFrom = function (from) {
        this.criterios = new Map();
        for (var key in from) {
            this.criterios[key] = from[key];
        }
    };
    return Aluno;
}());
exports.Aluno = Aluno;
