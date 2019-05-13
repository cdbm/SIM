Feature: Correção e emissão de relatório de projetos
		As a professor
        I want to register student's grades
        So that I can manage class's grades

Cenário: Geração de relatório com sucesso
Given eu estou na página de relatórios logado com um usuário Chefe “admin”
And o critério “Uso de pacotes” foi cadastrado com “Peso” caracterizado como “1”
And o critério “Uso de pacotes” foi cadastrado com “Peso” caracterizado como “2”
And a nota do aluno “João Silva” para o critério “Uso de pacotes” foi cadastrada como “10”
And para o critério “Uso de herança” foi cadastrada como “7”
And a nota do aluno “Leonardo Ramos” para o critério “Uso de pacotes” foi cadastrada como “8”
And para o critério “Uso de herança” foi cadastrado como “8”
And o campo “Media de notas” está como “-”
And o campo “Media de notas Uso de pacotes” está como “-”
And o campo “Media de notas Uso de herança” como “-”
When eu gero um relatório
Then eu visualizo o campo “Media de notas” como “8,5”
And o campo “Media de notas Uso de pacotes” como “9”
And o campo “Media de notas Uso de herança” como “7,5”
