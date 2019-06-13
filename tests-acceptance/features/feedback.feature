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
