const caixa1 = document.querySelector("#caixa1")
const todos_btn = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", () => {
    console.log("Clicou")   // Propaga o evento para todos os itens de denrtro do caixa 1
})
// Para parar 
todos_btn.map((elementos) => {
    elementos.addEventListener("click", (evento) => {
        evento.stopPropagation() // com isso não aciona mais o evento quando clicado nos cursos
    })
})
