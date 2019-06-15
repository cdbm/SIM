import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { Alert } from 'selenium-webdriver';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na página de "([^\"]*)" de "([^\"]*)"$/, async (sub, aluno) => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click();
        await $("a[name='alunoNota']").click();
    });

    Given(/^a nota atribuída para essa submissão é "([^\"]*)"$/, async (nota) => {
        await $("input[name='nota']").sendKeys(<string> nota);
    });


    When(/^Eu salvo o feedback$/, async () => {
       await $("button[name='atribuir']").click();
    });


    Then(/^eu estou na página de "Submissões"$/, async () => {
        await $("a[name='feedback']").click();
     });

     Then(/^eu vejo na submissão 2 de Maria a nota "([^\"]*)" atribuída. $/, async (nota) => {
        var n = document.getElementById('aNota').nodeValue;
        await n == nota;
        
     });
     
     Given(/^Eu esto de novo na página de "([^\"]*)" de "([^\"]*)"$/, async (sub, aluno) => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click();
        await $("a[name='alunoNota']").click();
    });

    Given(/^o feedback atribuído para essa submissão não é realizado$/, async () => {
    
    });

    When(/^Eu salvo o feedback$/, async () => {
       await $("button[name='atribuir']").click();
    });


    Then(/^a mensagem de erro "([^\"]*)" é exibida$/, async (erro) => {
        await browser.switchTo().alert();
        await alert.toString() ==  erro;
     });
     
     Then(/^o feedback não é postado$/, async () => {
        await $("a[name='feedback']").click();
        var n = document.getElementById('aFeed').nodeValue;
        await n == "";
     });  


     Given(/^o campo acesso não está marcado$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click();
    });

    Given(/^And o Eu realizou o feedback da submissão 1 de Maria$/, async () => {
        await $("button[name='gerar']").click();
    });
    When(/^Eu abro a tela de Feedbacks$/, async () => {
   
    });

    Then(/^Eu posso visualizar apenas o feedback da submissão 1 da aluna "([^\"]*)" realizado por mim$/, async (aluna) => {
        var n;
        n = document.getElementsByName("aNota");
        n == aluna;
    });
    

    Given(/^o campo acesso está marcado$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click();
        await $("input[name='checktest']").click();
    });

    Given(/^o monitor Mateus realizou o feedback da submissão 1 da aluna Maria$/, async () => {
        await $("button[name='gerar']").click();
    });
    Given(/^o monitor André realizou o feedback da submissão 1 do aluno Manoel$/, async () => {
    });
    When(/^Eu abro a tela de Feedbacks$/, async () => {
    });
    Then(/^Eu posso visualizar todos feedback realizados por todos os monitores$/, async () => {
    });
    
});

