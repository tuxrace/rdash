const { uniq, duplicates, contains, strToJson1 } = require('../dist/rdash')

var resultUniq = uniq([1, 1, 2, 2, 3, 4, 5])
console.log('Uniq', resultUniq)

var resultDuplicates = duplicates([1, 1, 2, 2, 3, 4, 5])
console.log('Duplicates', resultDuplicates)

var resultContains = contains([1, 2, 3, 4, 5], 3)
console.log('Contains', resultContains)

var resultJson1 = strToJson1("firstname: Arman, lastname: Ortega, age: 25")
console.log('strToJson1', resultJson1)
