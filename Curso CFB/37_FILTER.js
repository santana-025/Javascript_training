// Percorre por um array e permite que façamos uma filtragem 
// e nos retorna um novo array somente com os itens que passaram para o  filtro

const idades = [21, 11, 24, 45, 15, 1, 23, 18, 54, 65, 22, 4, 5];

// Filter pode conter uma função ou arrow ou direto no argumenrto
const maior = [idades.filter((valor, indice, arr) => {  // por padrão ele passa o valor, indice e array porem não é obrigatorio
    if (valor >= 18) {
        return valor
    }
})]

// Reduzindo o codigo
const maiorRed = idades.filter((valor) => {
    if (valor >= 18) {
        return valor
    }
})
console.log(idades);
console.log(maior);
