// Faça cinco programas para operações simpres 
const a = 5
const b = 9

console.log('soma: ' + (a+b));
console.log('subtração: ' + (a-b));
console.log('multiplicação: ' + (a*b));
console.log('divisão: ' + (a/b));
console.log('módulo ' + (a%b));
// --------------------------------------------------------------------------------------------//

// Faça um programa que retorno o maior de dois numeros
const c = 25
const d = 5 

if(c > d){
  console.log('C é maior que D');
}else{
  console.log('D é maior que C')
};
// --------------------------------------------------------------------------------------------//

// Faça um programa que retorno o maior de três numeros 
const e = 5
const f = 9
const g = 8

if( e > f && e > g){
  console.log("A constante E é a maior seu valor é:" + e)
} else if (f > e && f > g){
  console.log("A contante F é a maior seu valor é:" + f)
}else{
  console.log("A constante G é a maior seu valor é:" + g)
};
// --------------------------------------------------------------------------------------------//

//Faça um programa que retorne positivo caso valor seja positivo e negavivo caso seja negativo 
const h = 0

if(h > 0){
  console.log('positive');
}else if (h < 0){
  console.log('negative');
}else{
  console.log('zero');
};
// --------------------------------------------------------------------------------------------//

//Faça um programa que calcule os lados de um triangulo, caso os valores sejam invalidos envie uma mensagem de erro

let ladoA = 60
let ladoB = 60
let ladoC = 60 

let somaDeLados = ladoA + ladoB + ladoC
let ladosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0; 

if(ladosPositivos){
  if(somaDeLados === 180){
    console.log(true);
  }else{
    console.log(false)
  }
} else{
  console.log("Erro!")
}
// --------------------------------------------------------------------------------------------//

// Peças de xadrez 
const pecaXadrez = "rainha"

switch(pecaXadrez.toLowerCase()){
    case "rei":
    console.log("Anda uma casa para qualquer direção");
    break;
    case "bispo":
    console.log("Anda somente na diagonal");
    break;
    case "torre":
    console.log("Anda somente para os lados e para cima");
    break;
    case "rainha":
    console.log("Anda diagonal, horizontal e vertical");
    break;
    case "cavalo":
    console.log("Anda somente em L");
    break;
    case "peão":
    console.log("Anda somente para frente");
    break;
      default:
      console.log("peça invalida")
      break;
};
// --------------------------------------------------------------------------------------------//
// Convertendo notas em porcentagens 
const nota = 100; 

if(nota > 100 || nota < 0){
  console.log("Erro, nota informada é invalida")
}else if(nota >= 90){
  console.log("Sua nota é A");
}else if(nota >= 80){
  console.log("Sua nota é B");
}else if(nota >= 70){
  console.log("Sua nota é C");
}else if(nota >= 60){
  console.log("Sua nota é D");
}else if(nota >= 50){
  console.log("Sua nota é E");
}else{
  console.log("Sua nota é F");
}
// --------------------------------------------------------------------------------------------//
// Verifica se os numeros são divisiveis por 2 par
const i = 2;
const j = 4;
const k = 6;
let verifica = false

if((i % 2 === 0 || j % 2 === 0 || k % 2 ===0)){
  verifica = true
}
console.log(verifica)
// --------------------------------------------------------------------------------------------//
// Verifica se os numeros são divisiveis por 2 impar
const l = 5;
const m = 7;
const n = 1;
let verifica1 = false

if((l % 2 !== 0 || m % 2 !== 0 || n % 2 !==0)){
  verifica1 = true
}
console.log(verifica1)
// --------------------------------------------------------------------------------------------//
