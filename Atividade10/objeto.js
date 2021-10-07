var aluno1 = new Object();

// PRIMEIRA FORMA DE ATRIBUIR VALORES
aluno1.ra = "0030481923016";
aluno1.nome = "Kaique Teixeira dos Anjos";
alert("PRIMEIRA FORMA:" +
      "\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);

// SEGUNDA FORMA DE ATRIBUIR VALORES
aluno1["ra"] = "0030481923017";
aluno1["nome"] = "Jobson";
alert("SEGUNDA FORMA:" +
      "\nNome: " + aluno1["nome"] + 
      "\nRA: " + aluno1["ra"]);

// TERCEIRA FORMA DE ATRIBUIR VALORES
var ra = "ra", nome = "nome"
aluno1[ra] = "0030481923018";
aluno1[nome] = "Cleiton";
alert("TERCEIRA FORMA:" +
      "\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);