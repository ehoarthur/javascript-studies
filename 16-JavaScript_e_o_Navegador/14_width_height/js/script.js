let elemento = document.querySelector("#titulo-principal");

console.log("width: " + elemento.offsetWidth); // considera as bordas
console.log("height: " + elemento.offsetHeight);

console.log("largura: " + elemento.clientWidth); // não considera as bordas
console.log("altura: " + elemento.clientHeight);
