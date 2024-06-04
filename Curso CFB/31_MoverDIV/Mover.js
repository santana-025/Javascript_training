const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_mover = document.querySelector("#btn_mover");
const todos_cursos = [...document.querySelectorAll(".curso")];

todos_cursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => { //Adicionando evento de click nos elementos
        const curso = evento.target // Pegando quem clicou
        curso.classList.toggle("destaque") // Se tiver remove, e se não tiver adiciona a classe destaque
    })
})
btn_mover.addEventListener("click", () => {
    const cursos_selecionados = [...document.querySelectorAll(".destaque")];    // Pega todos com a classe destaque
    const cursos_não_selecionados = [...document.querySelectorAll(".curso:not(.destaque)")];    // Pega todos que não tem a classe destaque
    cursos_selecionados.map((el) => {
        caixa2.appendChild(el)  // adiciona elemento como filho no caixa 2
    })
    cursos_não_selecionados.map((el) => {
        caixa1.appendChild(el)  // adiciona elemento que não esta selecionado como filho da caixa 1
    })
})