// | -> funciona como "or"

const reg = /\w+: (Arthur|João|Maria)/;

console.log(reg.test("Nome: Arthur"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
