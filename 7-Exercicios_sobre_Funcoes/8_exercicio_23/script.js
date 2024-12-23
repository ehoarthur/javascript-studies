function checarString(string) {
  if (string.length > 10) {
    console.log("Texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
}

checarString("Texto muito longo");
checarString("olá");
