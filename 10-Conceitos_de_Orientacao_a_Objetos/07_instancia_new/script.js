function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Auuuuuuuuuuuu");
  };
}

let husky = new Cachorro("Husky", 4, "Cinza");

husky.uivar();
