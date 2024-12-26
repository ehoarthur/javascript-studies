class Carro {
  constructor(marcar, cor, gasolinaRestante, consumo) {
    this.marca = marcar;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }
  abastecer(litros) {
    this.gasolinaRestante += litros;
  }
}

let carro = new Carro("Celta", "preto", 10, 14);
carro.abastecer(40);
carro.dirigir(100);

console.log(carro);
