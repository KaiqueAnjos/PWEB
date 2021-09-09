var num1 = prompt("Informe um número: ");
var num2 = prompt("Informe mais um número: ");

alert("SOMA: " + (parseInt(num1, 10)+ parseInt(num2, 10)) +
      "\nSUBTRAÇÃO DO PRIMEIRO PELO SEGUNDO: " + (parseInt(num1, 10) - parseInt(num2, 10)) +
      "\nPRODUTO: " + (parseInt(num1, 10) * parseInt(num2, 10)) + 
      "\nDIVISÃO DO PRIMEIRO PELO SEGUNDO: " + (parseFloat(num1) / parseFloat(num2)) +
      "\nRESTO DA DIVISÃO DO PRIMEIRO PELO SEGUNDO: " + (parseFloat(num1) % parseFloat(num2)));