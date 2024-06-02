const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")]

// se possui um filho ou não
console.log(caixa1.hasChildNodes())
// Return se tem filhos elementos
// Children = elementos
// ChildNodes = itens

caixa1.children.length > 0 ? "Possui Filhos" : "Não Possui Filhos"
// se tiver filhos return true 


// Mudando o texto
caixa1.firstElementChild.innerHTML = "Teste"
// Mudando o texto do elemento 2
caixa1.children[1].innerHTML = "Teste2"

// cl_2 > cl_1 cl_0{texto}

//pegar o pai do cl_0
//cl_0.parentElement) ou parentNode

//pegar o Avo do cl_0
//cl_0.parentNode.parentNode)

// do avo pega o filho 3 dele
// cl_0.parentNode.parentNode.children[4])