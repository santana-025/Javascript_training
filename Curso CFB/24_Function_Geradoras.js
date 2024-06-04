// Ela gera alguma coisa e retorna e o resto é na proxima chamada
function* cores() {  // * indica que é Geradora
    yield "Vermelho" // é como se fosse um return.
    yield "Verde"
    yield "Azul"
}

const itc = cores();
console.log(itc.next().value);   //console.log(itc); Return uma função intereitor
console.log(itc.next().value);
console.log(itc.next().value);
