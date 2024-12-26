let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(4, 5)); // retorna [4]
console.log(nums.slice(4, 6)); // retorna [4, 5]

console.log(nums.slice(2)); // retorna [2, 3, 4, 5, 6, 7, 8, 9]

console.log(nums.slice(-2)); // retorna [8, 9] (pega os dois últimos elementos)

console.log(nums.slice(3, -2)); // retorna [3, 4, 5, 6, 7] (tira os dois últimos elementos)
