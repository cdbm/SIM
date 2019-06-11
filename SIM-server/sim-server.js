"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cadastroalunos_1 = require("./cadastroalunos");
var cadastrosubs_1 = require("./cadastrosubs");
var fs = require("fs");
var app = express();
exports.app = app;
var cadastro = new cadastroalunos_1.CadastroAlunos();
var cad = new cadastrosubs_1.CadastroSubs();
//var mailer : Mailer = new Mailer();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/alunos', function (req, res) {
    res.send(JSON.stringify(cadastro.getAlunos()));
});
app.get('/subs', function (req, res) {
    res.send(JSON.stringify(cad.getSubs()));
});
app.post('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = cadastro.criar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
app.post('/sub', function (req, res) {
    var sub = req.body;
    sub = cad.criar(sub);
    if (sub) {
        res.send({ "success": "Submissão criada com sucesso" });
    }
    else {
        res.send({ "failure": "A submissão não pode ser criada" });
    }
});
app.post('/sendemail', function (req, res) {
    var nodemailer = require('nodemailer');
    var config = JSON.parse(fs.readFileSync("config.json").toString("utf-8"));
    var transporter = nodemailer.createTransport(config);
    transporter.sendMail(req.body, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email enviado: ' + info.response);
        }
    });
    res.send({ "success": "email enviado" });
});
app.put('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
app.put('/sub', function (req, res) {
    var sub = req.body;
    sub = cad.atualizar(sub);
    if (sub) {
        res.send({ "success": "A submissão foi atualizada com sucesso" });
    }
    else {
        res.send({ "failure": "A submissão não pode ser atualizada" });
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
