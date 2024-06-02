const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")]

// Criando novo elemento creatElemento(tagdoelemento)
const novo_elemento = document.createElement('div')

// Adicionado texto
novo_elemento.innerHTML = "React Native"

// Adicionando atributos (id e classe e valores)
novo_elemento.setAttribute("id", "c7")
novo_elemento.setAttribute("class", "curso c1")

//Adicionando na caixa1
caixa1.appendChild(novo_elemento)

// Adicionando os cursos dinamicamente
// Percorer os elementos e ir Criando itens na caixa1
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL"]

cursos.map((elementos, indice) => {
    const novo_ele = document.createElement('div')
    novo_ele.setAttribute("id", `c${indice}`)
    novo_ele.setAttribute("class", "curso c1")
    novo_ele.innerHTML = elementos
    caixa1.appendChild(novo_ele)
})

