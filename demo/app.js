const { uniq, duplicates } = require('./dist/rdash')

var resultUniq = uniq([1,1,2,2,3,4,5])
console.log("Uniq", resultUniq)

var resultDuplicates = duplicates([1,1,2,2,3,4,5])
console.log("Duplicates", resultDuplicates)

