// com o ClassName agente consegue pegar pelas classes
const cursostodos = [...document.getElementsByClassName("Curso")]; // Return htmlcoletion com todos os elementos com essa clase
// Podemos transformar em Array com o operador spread
const cursosc1 = [...document.getElementsByClassName("c1")]; // Return htmlcoletion com todos os elementos com essa clase
const cursosc2 = [...document.getElementsByClassName("c2")]; // Return htmlcoletion com todos os elementos com essa clase
// Podemos pegar individual dessa forma. // Pelo indice
const individual = [...document.getElementsByClassName("Curso")][2];
console.log(individual);


console.log(cursostodos, cursosc1, cursosc2);
