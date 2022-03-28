let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;// 
for (let index = 0; index < numbers.length; index += 1){
  //console.log(numbers[index]);
 };
//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;//
let resultado = 0; 
for (let index = 0; index < numbers.length; index += 1){
  resultado += numbers[index]
 };
  //console.log(resultado)
  //Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  let sum = 0
  for (let index = 0; index < numbers.length; index += 1){
  sum += numbers[index];
 };
 let div = sum / numbers.length
  //console.log(div)
  //Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
  let sum1 = 0
  for (let index = 0; index < numbers.length; index += 1){
  sum1 += numbers[index];
 } sum1 = sum1 / numbers.length
 if(sum1 > 20){
   console.log("valor maior que 20");
 }else{
   console.log("valor menor ou igual a 20");
 }
 //Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 let maiorNumero = numbers[0];
 for (let index = 1; index < numbers.length; index += 1){
   if (numbers[index] > maiorNumero){
     maiorNumero = numbers[index];
   }
 }
console.log(maiorNumero)
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let result = 0; 
for(let i = 0; i < numbers.length; i += 1){
  if (numbers[i] % 2 !==0){
    result += 1;
  }
}
if (result === 0){
  console.log('nunhum valor ímpar encontrado');
} else {
  console.log(result);
}
//Utilizando for , descubra qual o menor valor contido no array e imprima-o
let menorNumero = numbers[0];
for (let i = 1; i < numbers.length; i += 1){
  if (numbers[i] < menorNumero){
    menorNumero = numbers[i];
  }
}
console.log(menorNumero)
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numeros = []
for (let i = 1; i < 26; i += 1){
  numeros.push(i);
}
console.log(numeros)
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let index = 0; index < numeros.length; index += 1) {
  console.log(numeros[index] / 2);
};
