// let hello = (name, lastName) => console.log(`Olá ${name} ${lastName}, eu sou uma função`)

// hello("Gabriel", "Estevão")

// numbers = [ 1, 32, 122, 53, 15 , 4 ,3];

// const doubledNumbers = numbers.map(nums => nums * 2)

// console.log(doubledNumbers)

const money = [
  { bank: "NuBank", balance: 1000 },
  { bank: "PicPay", balance: 500 },
  { bank: "Bradesco", balance: 1500 },
];

const totalCache = money.reduce((total, cache) => total + cache.balance, 0);

// console.log(totalCache)

money.sort((a, b) => a.balance - b.balance);

console.log(money);

alert(money);
