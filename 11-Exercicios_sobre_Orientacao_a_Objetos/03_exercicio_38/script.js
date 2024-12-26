class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
  set setRua(rua) {
    this.rua = rua;
  }
  set setBairro(bairro) {
    this.bairro = bairro;
  }
  set setCidade(cidade) {
    this.cidade = cidade;
  }
  set setEstado(estado) {
    this.estado = estado;
  }
}

let endereco = new Endereco("Rua 1", "Bairro 1", "Cidade 1", "Estado 1");

console.log(endereco);

endereco.setRua = "Rua 2";
endereco.setBairro = "Bairro 2";
endereco.setCidade = "Cidade 2";
endereco.setEstado = "Estado 2";

console.log(endereco);
