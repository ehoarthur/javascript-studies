// junta elementos em um array em uma frase, por meio de um separador

let frase = "Testando o método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");

console.log(novaFrase); // Testando@o@método@split

console.log(palavras.join(" ")); // Testando o método split 
