let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log('Bem-vinda, ' + info.personagem);
//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim';
console.log(info)
//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console
for(let properties in info){
  console.log(properties);
}
//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let properties in info){
  console.log(info[properties]);
}
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
for(properties in info){
  if( properties === 'recorrente' && info[properties] === 'sim' && infoPatinhas[properties] === 'sim'){
    console.log('Ambos Recorrentes');
  }else{
    console.log(info[properties] + ' e ' + infoPatinhas[properties]);
  }
}
//Novo obj
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
//Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor:'JK Rowling',
  editor:'Rocco',
},
);
// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');