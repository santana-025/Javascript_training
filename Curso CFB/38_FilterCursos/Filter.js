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

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", `c ${indice}`);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;


    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);

    novoElemento.appendChild(comandos);
    return novoElemento
}

cursos.map((elem, chave) => {
    const novoElemento = criarNovoCurso(elem)
    caixaCursos.appendChild(novoElemento);
    indice++
})

const radioSelecionado = () => { // função para pegar o radio selecionado
    const todosRadios = [...document.querySelectorAll("input[type=radio]")];   // pegamos todos os inouts radios 
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => { // podemos usar apenas o que precisar
        return ele.checked // retorna somente o selecionado
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (even) => {
    const rs = radioSelecionado()
    try { // so remove se for diferente de 
        const cursoSelecionado = rs.parentNode.previousSibling.textContent;
        alert("Curso Selecionado " + cursoSelecionado);
    } catch (err) {
        alert("Selecione um curso");
    }
    // Opção 2
    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent;
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado();
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove(); // Função para remover o curso
    } else {
        alert("Selecione um curso");
    }
})



btnAdicionarNovoCursoAntes.addEventListener("click", () => {
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode // Retorna a div completa
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)   //insertBefore(onde vai, oq vai)
        } else {
            alert("Digite o nome do Curso")
        }
    } catch (err) {
        alert("Selecione um curso");
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", () => {
    // não existe um insertAfter, forma de resolver é pegar o proximo irmão do selecionado e 
    // adicionar um insertBfore. ou seja depois do selecionado

    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode // Retorna a div completa
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)   //insertBefore()
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