//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}
console.log(palindrome("arara"))
console.log(palindrome('desenvolvimento'));
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceMaior (array){
  let indiceMaior = 0;
  for(let indice in array)
  if(array[indiceMaior] < array[indice]){
    indiceMaior = indice;
  }
  return indiceMaior
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]))
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor
function indiceMenor (numeros){
  let indiceMenor = 0;
  for(let indice in numeros){
    if (numeros[indiceMenor] > numeros[indice]){
      indiceMenor = indice;
    }
  }
  return indiceMenor
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]))
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres
function maiorNome (nomes){
  let maiorNomes = nomes[0]
  for (let indice in nomes){
    if (maiorNome.length < nomes[indice].length){
      maiorNome = nomes[indice];
    }
  }
  return maiorNome
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaTodosNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(5))
//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word .
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be')); 
console.log(verificaFimPalavra('joaofernando', 'fernan')); 
