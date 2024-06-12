// Every verifica no array e procura por equivalencia 
// se todos os do array vai ter equivalencia com a regra que eu especificar
// se todos passar true caso não passa false

const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [10, 2, 5, 19, 0, 8, 9]
p_array.innerHTML = "[" + elementos_array + "]";


btnVerificar.addEventListener("click", (evt) => {
    // se não encontra ja fica la 
    const retorno = elementos_array.every((elemento, indice) => { // elemento, indice e array
        if (elemento > 18) {
            resultado.innerHTML = "Array não conforme na Posição" + indice;
        }
        return elemento <= 18
    })
    if (retorno) {
        resultado.innerHTML = "Array tudo OK!"
    }
    console.log(retorno);
})
