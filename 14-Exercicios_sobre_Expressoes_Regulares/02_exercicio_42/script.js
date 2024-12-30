const validarId = /\d+ID\b/;

console.log(validarId.test("12313123ID"));
console.log(validarId.test("12313123"));
console.log(validarId.test("asd"));
console.log(validarId.test("asdsjasjID"));
console.log(validarId.test("ID"));
console.log(validarId.test("555ID"));
