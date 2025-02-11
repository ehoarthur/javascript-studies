const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "Arthur", available: true },
  { name: "Matheus", available: false },
  { name: "Pedro", available: false },
  { name: "João", available: true },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);
