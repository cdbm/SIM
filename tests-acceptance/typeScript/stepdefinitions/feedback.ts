import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { Alert } from 'selenium-webdriver';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou na página de "([^\"]*)" de "([^\"]*)"$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click;
        await $("a[name='alunoNota']").click;
    });

    Given(/^a nota atribuída para essa submissão é "([^\"]*)"$/, async (nota) => {
        await $("input[name='nota']").sendKeys(<string> nota);
    });


    When(/^Eu salvo o feedback$/, async () => {
       await $("button[name='atribuir']").click;
    });


    Then(/^eu estou na página de "Submissões"$/, async () => {
        await $("a[name='feedback']").click;
     });
     Then(/^eu vejo na submissão 2 de Maria a nota "([^\"]*)" atribuída. $/, async (nota) => {
        var n = document.getElementById('aNota').nodeValue;
        await n == nota;
     });  
});


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu esto de novo na página de "([^\"]*)" de "([^\"]*)"$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click;
        await $("a[name='alunoNota']").click;
    });

    Given(/^o feedback atribuído para essa submissão não é realizado$/, async () => {
    
    });

    When(/^Eu salvo o feedback$/, async () => {
       await $("button[name='atribuir']").click;
    });


    Then(/^a mensagem de erro "([^\"]*)" é exibida$/, async (erro) => {
        await browser.switchTo().alert();
        await alert.toString() ==  erro;
     });
     
     Then(/^o feedback não é postado$/, async () => {
        await $("a[name='feedback']").click;
        var n = document.getElementById('aFeed').nodeValue;
        await n == "";
     });  
});