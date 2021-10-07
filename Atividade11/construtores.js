function Retangulo(x,y) {
  this.base = x;
  this.altura = y;
  this.CalcularArea = CalcularArea;

  function CalcularArea() {
    alert("Área do Retângulo: " + this.base*this.altura);
  }
}

var retangulo = new Retangulo(10,20);
retangulo.CalcularArea();

function Conta() {
  var nomeCorrentista, banco, numConta, saldo;
  this.getNomeCorrentista = function(){
    return nomeCorrentista;
  }
  this.getBanco = function(){
    return banco;
  }
  this.getNumConta = function(){
    return numConta;
  }
  this.getSaldo = function(){
    return saldo;
  }
  this.setNomeCorrentista = function(value){
    nomeCorrentista = value;
  }
  this.setBanco = function(value){
    banco = value;
  }
  this.setNumConta = function(value){
    numConta = value;
  }
  this.setSaldo = function(value){
    saldo = value;
  }
}

function Corrente() {
  var saldoEspecial;
  this.getSaldoEspecial = function(){
    return saldoEspecial;
  }
  this.setSaldoEspecial = function(value){
    saldoEspecial = value;
  }
}

function Poupanca() {
  var juros, dataVencimento;
  this.getJuros = function(){
    return juros;
  }
  this.getDataVencimento = function(){
    return dataVencimento;
  }
  this.setJuros = function(value){
    juros = value;
  }
  this.setDataVencimento = function(value){
    dataVencimento = value;
  }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("Kaique Teixeira dos Anjos");
contaCorrente.setBanco("Nubank");
contaCorrente.setNumConta("111111-1");
contaCorrente.setSaldo(10000);
contaCorrente.setSaldoEspecial(2000);

contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Kaique Teixeira dos Anjos");
contaPoupanca.setBanco("Inter");
contaPoupanca.setNumConta("222222-2");
contaPoupanca.setSaldo(50000);
contaPoupanca.setJuros(0.2);
contaPoupanca.setDataVencimento("20");

alert("CONTA CORRENTE:" +
      "\nNome Correntista: " + contaCorrente.getNomeCorrentista() + 
      "\nBanco: " + contaCorrente.getBanco() + 
      "\nN° Conta: " + contaCorrente.getNumConta() + 
      "\nSaldo: " + contaCorrente.getSaldo() + 
      "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());

      alert("CONTA POUPANÇA:" +
      "\nNome Correntista: " + contaPoupanca.getNomeCorrentista() + 
      "\nBanco: " + contaPoupanca.getBanco() + 
      "\nN° Conta: " + contaPoupanca.getNumConta() + 
      "\nSaldo: " + contaPoupanca.getSaldo() + 
      "\nJuros: " + contaPoupanca.getJuros() +
      "\nData Vencimento: Todo dia " + contaPoupanca.getDataVencimento());
