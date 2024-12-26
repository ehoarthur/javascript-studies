let pessoa = {
    "nome": "Arthur",
    "idade": 17,
    "profissao": "Programador",
    "hobbies": ["Programar", "Jogar", "Estudar"]
}

let pessoaTexto = JSON.stringify(pessoa);   

console.log(pessoaTexto); 
// console.log(pessoaTexto.nome); // undefined

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies);
