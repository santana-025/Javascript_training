// Podemos usar eventos no html 
// <div onclick="alert('Clicou')"> </div>  = Diretamente com js
// <div onclick="msg()"> </div>  = chama uma função no js (pode ser anonima, oun  ArrowFuntion)

// Usando Evento no Javascript

const msg = () => {
    alert("Clicou")
}

const pegando_div = document.querySelector("#c1")
// addEventListener(evento, função) 
// pegando_div.addEventListener("click", msg) ou
// pegando_div.addEventListener("click", (evento) => {
//     msg()
//    // pegando quem clicou
//     const pegando_quem_clicou = evento.target
//     console.log(pegando_quem_clicou)
// })

const pegando_todos_cursos = [...document.querySelectorAll(".Curso")];

pegando_todos_cursos.map((el) => {
    el.addEventListener("click", (evento) => {
        const el = evento.target    // Pegando quem foi que fez o evento
        el.classList.add("destaque")
    })
})

// console.log(evento.id) = Retorna o ID
// console.log(evento.innerHTML) = Retorna o HMTL
