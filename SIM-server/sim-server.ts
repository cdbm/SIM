import express = require('express');
import bodyParser = require("body-parser");
import nodemailer = require('nodemailer');
import { Aluno } from '../SIM-app/src/app/alunos/aluno';
import {CadastroAlunos} from './cadastroalunos';
import {Sub} from "../SIM-app/src/app/feedback/sub";
import {CadastroSubs} from "./cadastrosubs";
import {Mailer} from './mailer';

import fs = require('fs');
var app = express();

var cadastro: CadastroAlunos = new CadastroAlunos();
var cad : CadastroSubs = new CadastroSubs();
//var mailer : Mailer = new Mailer();
var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/alunos', function (req, res) {
  res.send(JSON.stringify(cadastro.getAlunos()));
})

app.get('/subs', function (req, res) {
  res.send(JSON.stringify(cad.getSubs()));
})


app.post('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body;
  aluno = cadastro.criar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser cadastrado"});
  }
})
app.post('/sub', function (req: express.Request, res: express.Response) {
  var sub: Sub = <Sub> req.body;
  sub = cad.criar(sub);
  if (sub) {
    res.send({"success": "Submissão criada com sucesso"});
  } else {
    res.send({"failure": "A submissão não pode ser criada"});
  }
})



app.post('/sendemail', function (req: express.Request, res: express.Response) {
    
    const nodemailer = require('nodemailer');
    
    var config = JSON.parse(fs.readFileSync( "config.json").toString("utf-8"));
    const transporter = nodemailer.createTransport(config);
    
      transporter.sendMail(req.body, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
    res.send({"success": "email enviado"});
})


app.put('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno> req.body;
  aluno = cadastro.atualizar(aluno);
  if (aluno) {
    res.send({"success": "O aluno foi atualizado com sucesso"});
  } else {
    res.send({"failure": "O aluno não pode ser atualizado"});
  }
})

app.put('/sub', function (req: express.Request, res: express.Response) {
  var sub: Sub = <Sub> req.body;
  sub = cad.atualizar(sub);
  if (sub) {
    res.send({"success": "A submissão foi atualizada com sucesso"});
  } else {
    res.send({"failure": "A submissão não pode ser atualizada"});
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export { app }