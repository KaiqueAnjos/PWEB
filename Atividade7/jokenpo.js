var usuario = parseFloat(prompt("Faça sua jogada\nDigite o número correspondente a sua jogada:\n-(1)Pedra;\n-(2)Papel;\n-(3)Tesoura;"));
var computador = Math.random();
alert(computador);

if (computador <= 0.33) {
  computador = 1;
} else if (0.33 < computador <= 0.66){
  computador = 2;
}
else{
  computador = 3;
}

if(usuario === 1){
  if (computador === 2) {
    alert("Você jogou pedra e o computador jogou Papel. Computador Venceu!")
  }else if (computador === 3) {
    alert("Você jogou pedra e o computador jogou Tesoura. Você Venceu!")
  }
  else {
    alert("Você jogou pedra e o computador jogou pedra. Empate!")
  }
} else if (usuario === 2){
  if (computador === 1) {
    alert("Você jogou Papel e o computador jogou Pedra. Você Venceu!")
  }else if (computador === 3) {
    alert("Você jogou Papel e o computador jogou Tesoura. Computador Venceu!")
  }
  else {
    alert("Você jogou Papel e o computador jogou Papel. Empate!")
  }
}
else{
  if (computador === 1) {
    alert("Você jogou Tesoura e o computador jogou Pedra. Computador Venceu!")
  }else if (computador === 2) {
    alert("Você jogou Tesoura e o computador jogou Papel. Você Venceu!")
  }
  else {
    alert("Você jogou Tesoura e o computador jogou Tesoura. Empate!")
  }
}