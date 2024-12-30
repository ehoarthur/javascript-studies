// + -> faz com que o conjunto anterior possa repetir inúmeras vezes

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1234"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("qwert"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("1212129178218727"));
