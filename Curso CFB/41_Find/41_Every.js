// Find permite pesquisar os elementos de um array e retorna o elemento do array 
// quando achar, retorna true e se não achar manda um undefined

const p_array = document.querySelector("#array");
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btnPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = [10, 2, 5, 1, 0, 54, 8, 7, 789, 9]
p_array.innerHTML = "[" + elementos_array + "]";


btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado" // se não encontra ja fica la 
    const ret = elementos_array.find((elemento, indice) => {
        if (elemento == txt_pesquisar.value) {
            resultado.innerHTML = "Valor Encontrado" + elemento + "Na Posição " + indice;
            return elemento
        }
    })// passa um função, com os parametros de elemento, indice e um array com o elemento interado 
    console.log(ret);
})
// Para array de strings é a mesma coisa
// porem usase o toupperCase ou tolowerCase = para que qualquer pesquisa ache o elemento 
// if (elemento.toupperCase() == txt_pesquisar.value.toupperCase'()'