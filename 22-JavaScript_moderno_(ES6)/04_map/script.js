const products = [
  { name: "Camiseta", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupa") {
    product.onSale = true;
  }
});


