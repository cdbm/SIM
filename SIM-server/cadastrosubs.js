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
    CadastroSubs.prototype.getSubs = function () {
        return this.subs;
    };
    return CadastroSubs;
}());
exports.CadastroSubs = CadastroSubs;
