var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("🚀 ~ file: ex2.js ~ line 2 ~ array", array)

var oddNumbers = array.filter(nb => {
    return nb % 2 !== 0;
})
console.log("🚀 ~ file: ex2.js ~ line 7 ~ oddNumbers", oddNumbers)

var divisibleByTwoOrFive = array.filter(nb => {
    return nb % 2 == 0 || nb % 5 == 0;
})
console.log("🚀 ~ file: ex2.js ~ line 12 ~ divisibleByTwoOrFive", divisibleByTwoOrFive)

var divisbleByThreeSquared = array.filter(nb => {
    return nb % 3 == 0;
}).map(nb => nb ** 2)
console.log("🚀 ~ file: ex2.js ~ line 17 ~ divisbleByThreeSquared", divisbleByThreeSquared)

var sumOfDivisibleByFiveSquared = array.filter(nb => {
    return nb % 5 == 0;
}).map(nb => nb ** 2).reduce((partialSum, next) => partialSum + next, 0);
console.log("🚀 ~ file: ex2.js ~ line 22 ~ sumOfDivisibleByFiveSquared", sumOfDivisibleByFiveSquared)
