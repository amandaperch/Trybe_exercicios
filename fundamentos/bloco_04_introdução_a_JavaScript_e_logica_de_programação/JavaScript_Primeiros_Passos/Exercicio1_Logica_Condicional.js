const valorA = 3  
const valorB = 6

console.log (valorA + valorB)
console.log (valorA - valorB)
console.log (valorA * valorB)
console.log (valorA / valorB)
console.log (valorA % valorB)

const num1 = 7
const num2 = 65
if (num1 > num2){
  console.log ("'a' é maior que 'b' ")}
else {
 console.log ("'b' é maior que 'a'")
}

const number1 = 9
const number2 = 3
const number3 =12
if (number1 > number2 && number1 > number3){
  console.log("o maior numero é number1")
}
else if (number2 > number1 && number2 > number3){
  console.log ("o maior é o numero 2")
}
else {
  console.log ("o maior é o numero 3")
}

const numero1 = 45
if (numero1 > 0){
  console.log ("positive")
}
  else if (numero1 < 0){
    console.log ("negative")
  }
  else {
    console.log("zero")
  }

const angulo1 = 60
const angulo2 = 60
const angulo3 = 60
if (angulo1 + angulo2 + angulo3 === 180){
  console.log("true")
  }
else {
  console.log("false")
}

const pecaXadrez = "cavalo";

switch (pecaXadrez.toLocaleLowerCase()){
  case "bispo":
  console.log("bispo - se move somente na diagonal");
  break;
  case "rainha":
    console.log("Rainha - para qualquer lado");
    break;
    case "cavalo":
      console.log("Cavalo - se movimento em L");
      break;
      case "torre":
        console.log("Torre: se move para vertical e horizontal somente")
        break;
        default:
          console.log("Erro, peça não encontrada");
          break;
          }

  let nota = 150;
if (nota < 0 || nota >100){
  console.log("Erro nota invalida")
}
else if (nota >= 90){
  console.log('A')
}
else if (nota >= 80){
  console.log('B')
}
else if (nota >= 70){
  console.log('C')
}
else if (nota >= 60){
  console.log('D')
  }
else if (nota >= 50){
  console.log ('E')
}
else {
  console.log('F')
}

const valores = 3
const valores1 = 9
const valores2 = 24

if (valores % 2 === 0 || valores1 % 2 === 0 || valores2 % 2 === 0){
  console.log("true")
}else {
  console.log("fase")
}
