// var
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

// let
let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// const
function logName() {
  const name = "Arthur";
  console.log(name);
}

const name = "Pedro";

logName();
console.log(name);
