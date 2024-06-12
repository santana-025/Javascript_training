const caixaCursos = document.querySelector("#CaixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois");
const nomeCurso = document.getElementById("nomeCurso");



let indice = 0;

const tirarSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]; //Pegamos todos os itens com a class .Selecionado com o sprad
    cursoSelecionado.map((ele) => { //percoremos todos eles
        ele.classList.remove("selecionado") // retirando a classe 
        // e antes de adicionar a classe selecionado na função de criação removemos todos os outros
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", `c ${indice}`);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;

    novoElemento.addEventListener("click", (evnt) => {
        tirarSelecao()
        evnt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((elem, chave) => {
    const novoElemento = criarNovoCurso(elem)
    caixaCursos.appendChild(novoElemento);
    indice++
})

const cursoSelecionado = () => { // função para pegar o radio selecionado
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")];
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (even) => {
    try {
        alert("Curso Selecionado " + cursoSelecionado().innerHTML);
    } catch (err) {
        alert("Selecione um curso");
    }
    // Opção 2
    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const cs = cursoSelecionado();
    if (cs != undefined) {
        cs.remove(); // Função para remover o curso
    } else {
        alert("Selecione um curso");
    }
})



btnAdicionarNovoCursoAntes.addEventListener("click", () => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado())   //insertBefore(onde vai, oq vai)
        } else {
            alert("Digite o nome do Curso")
        }
    } catch (err) {
        alert("Selecione um curso");
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", () => {
    try {
        if (nomeCurso.value != "") {
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)   //insertBefore()
        } else {
            alert("Digite o nome do Curso")
        }
    } catch (err) {
        alert("Selecione um curso");
    }
})




//parentNode    Pai do elemento
//childNodes[nodenumber]  Irmãos nodelist  
//firstChild    Primeiro Filho
//lastChild     Ultimo Filho
//nextSibling   proximo irmão
//previousSibling   irmão anterior