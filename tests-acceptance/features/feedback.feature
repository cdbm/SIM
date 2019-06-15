Feature:As monitor 
	I Want to atribuir uma nota para o exercício,
	So i possa corrigir o exercício diretamente da plataforma.

Scenario: Adicionar notas do exercício 
Given Eu estou na página de "Submissão 1" de "Maria"
Given a "nota" atribuída para essa submissão é "5"
When Eu salvo o feedback
Then eu estou na página de "Submissões"
Then eu vejo na "submissão 1" de “Maria” a nota "5" atribuída.

Feature:As Monitor,
	i want to Enviar feedbacks para os alunos,
	So eles possam entender melhor os assuntos.
Scenario: feedback incompleto
Given Eu estou de novo na página de "Submissão 1" de "Maria"
Given o "feedback" atribuído para essa submissão não é realizado
When Eu salvo o feedback
Then a mensagem de erro "Por favor, insira um feedback" é exibida 
Then o feedback não é postado


Feature: As monitor,
	I want to ver os feedbacks feitos por mim,
	so Eu possa ver soluções e notas passadas.

Scenario: restrição monitor:
Given o campo acesso não está marcado
And o Eu realizou o feedback da submissão 1 de Maria
When Eu abro a tela de “Feedbacks”.
Then  Eu posso visualizar apenas o feedback da “submissão 1” do aluna Maria realizado por mim


Feature: Ver todos os feedbacks.
As Professor/Monitor chefe,
	I Want to ver os feedbacks de todos os monitores, 
	so Eu possa ver se os feedbacks estão sendo feitos corretamente.

Scenario: acesso professor:
Given o campo acesso está marcado
And o monitor Mateus realizou o feedback da “submissão 1” da aluna “Maria”
And o monitor André realizou o feedback da “submissão 1” do aluno “Manoel”
When Eu abro a tela de “Feedbacks”.
Then  Eu posso visualizar todos feedback realizados por todos os monitores
