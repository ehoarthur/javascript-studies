function decrementa(numero) {
  for (let i = numero; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

decrementa(10);
decrementa(20);
