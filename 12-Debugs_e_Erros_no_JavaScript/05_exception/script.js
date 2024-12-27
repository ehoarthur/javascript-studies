function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parâmetro precisa ser uma string!");
  } else {
    console.log(`Olá ${nome}.`);
  }
}

saudacao("Arthur");
saudacao(5);

console.log("teste");
