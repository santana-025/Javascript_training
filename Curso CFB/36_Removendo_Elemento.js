const caixa1 = document.querySelector("#caixa1");
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL"]

cursos.map((elementos, indice) => {
    const novo_ele = document.createElement('div')
    novo_ele.setAttribute("id", `c${indice}`)
    novo_ele.setAttribute("class", "curso c1")
    novo_ele.innerHTML = elementos

    // Criando uma imagem
    const btn_lixeira = document.createElement("img")

    // Atributo passando o local dela
    btn_lixeira.setAttribute("src", "../Curso CFB/imgs/lixeira.png")

    // Adicionando uma class
    btn_lixeira.setAttribute("class", "btn_lixeira")

    // Evento de deletar novo elemento com o click na lixeira
    btn_lixeira.addEventListener("click", (evento) => {
        // removendo items com o removeChild(elemento.target)
        caixa1.removeChild(evento.target.parentNode) // Lembrando que o filho da caixa é o novo iten e a lixeira sim é do novo item
    })

    // Adicionando os a lixeira no novo_ele e ele na caixa1
    novo_ele.appendChild(btn_lixeira);
    caixa1.appendChild(novo_ele)
})
