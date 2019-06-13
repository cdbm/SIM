import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Eu estou logado como monitor$/, async () => {
        await browser.get("http://localhost:4200/");
        await $("a[name='fb']").click;
    });

    Given(/^Eu estou na página de "([^\"]*)" de "([^\"]*)"$/, async () => {
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