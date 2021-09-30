var n1 = 90;
var n2 = 10;
var n3 = 100;
document.getElementById("f1-n1").innerHTML = n1;
document.getElementById("f1-n2").innerHTML = n2;
document.getElementById("f1-n3").innerHTML = n3;
function maior(n1, n2, n3) {
  var maior;
  maior = Math.max(n1, n2, n3);
  document.getElementById("maior").innerHTML = maior;
}

document.getElementById("f2-n1").innerHTML = n1;
document.getElementById("f2-n2").innerHTML = n2;
document.getElementById("f2-n3").innerHTML = n3;
function ordemCrescente(n1, n2, n3) {
  var matriz = [n1,n2,n3];
  matriz.sort(function(a, b){return a - b})
  document.getElementById("p1").innerHTML = matriz[0];
  document.getElementById("p2").innerHTML = matriz[1];
  document.getElementById("p3").innerHTML = matriz[2];
}