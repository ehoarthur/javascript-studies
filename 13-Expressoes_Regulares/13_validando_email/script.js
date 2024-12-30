const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("arthur@gmail.com"));
console.log(validarEmail.test("arthur@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("arthur@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail"));
