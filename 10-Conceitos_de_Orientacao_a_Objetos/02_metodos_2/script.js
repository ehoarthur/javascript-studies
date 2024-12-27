const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("Auuuuuuuuuuuu");
  },
  rosnar: function () {
    console.log("Grrrrrrrrrrrr");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return this.raca;
  },
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());
