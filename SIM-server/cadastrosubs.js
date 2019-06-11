"use strict";
exports.__esModule = true;
var CadastroSubs = /** @class */ (function () {
    function CadastroSubs() {
        this.subs = [];
    }
    CadastroSubs.prototype.criar = function (sub) {
        this.subs.push(sub);
        return sub;
    };
    CadastroSubs.prototype.atualizar = function (sub) {
        var result = this.subs.find(function (a) { return a.aluno == sub.aluno; });
        if (result) {
            result.nota = sub.nota;
            result.feedback = sub.feedback;
        }
        ;
        return result;
    };
    CadastroSubs.prototype.getSubs = function () {
        return this.subs;
    };
    return CadastroSubs;
}());
exports.CadastroSubs = CadastroSubs;
