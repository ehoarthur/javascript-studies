let arr = ["João", "Maria", "Arthur", "Helena", "Eduardo", "Leticia"];
let arr2 = [true, false, true];

function verificarNumeroElementos(arr) {
  if (arr.length < 5) {
    console.log("Poucos elementos");
  } else {
    console.log("Muitos elementos");
  }
}

verificarNumeroElementos(arr);
verificarNumeroElementos(arr2);
