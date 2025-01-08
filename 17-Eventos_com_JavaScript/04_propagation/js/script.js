let p = document.querySelector("p");
let btn1 = document.querySelector("#btn1");

function msg(e) {
  console.log("Clicou no button!");
  e.stopPropagation();
}

btn1.addEventListener("click", msg);

p.addEventListener("click", function () {
  console.log("Clicou no parágrafo!");
});
