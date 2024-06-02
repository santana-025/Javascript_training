//  CAIXA 1 : RAIZ
//  tudo dentro dela é Filho ou seja Child
//  curso1  : child first_Child/Primeira
//  curso2  : child 
//  curso3  : child
//  curso4  : child
//  curso5  : child Last_Child/Ultimo


// curso2 : Não tem elementos filhos mais tem um text como filho
// direto mais não tem elementos

// curso2 > caixa1       : RELAÇÂO Parent ou seja Pais
// curso2 > curso1,3,4,5 : RELAÇÂO Siblings ou seja Irmãos

// Ou seja todos os cursos são irmãos pois estão no mesmo pai

const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")]

// vamos em elementos no navegador e em propriedades
console.log(caixa1)
// tem 13 nodelist pois conta com os textos
// children 6 pois so retorna os elementos

console.log(btn_c[0])
// children 0 pois não tem os elementos
//nextElementSibling: div#c2.curso.c1 proximo irmão

// Retorna os filhos da caixa1 uma nodelist
console.log(caixa1.children)

// podemos pegar por indice
console.log(caixa1.children[4])

// Para pegar o ultimo length -1
console.log(caixa1.children.length - 1)
//ou 
console.log(caixa1.lastElementChild)

// Pegar o primeiro
console.log(caixa1.children[0])
console.log(caixa1.firstElementChild);

// Pegar o no raiz
console.log(document.getRootNode());

// Pegar o no raiz apartir de um elemento
console.log(btn_c[0].getRootNode());

//Pegar o OwnerDocument
console.log(btn_c[0].ownerDocument);