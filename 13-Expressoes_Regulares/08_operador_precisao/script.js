// {} -> indica quantas vezes a ocorrência pode acontecer

const cep = /\d{5}-\d{3}/;

console.log(cep.test("11111-111"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(00)0000-0000"));
console.log(tel.test("(11)11111-1111"));
