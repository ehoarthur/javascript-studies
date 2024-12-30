const validaDominio = /[?www].\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecodar.com"));
console.log(validaDominio.test("www.horadecodar"));
console.log(validaDominio.test("horadecodar.com.br"));
