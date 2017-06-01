const { uniq, duplicates, contains, csvToJson, objectToQueryString } = require('../dist/rdash')

var resultUniq = uniq([1, 1, 2, 2, 3, 4, 5])
console.log('Uniq', resultUniq)

var resultDuplicates = duplicates([1, 1, 2, 2, 3, 4, 5])
console.log('Duplicates', resultDuplicates)

var resultContains = contains([1, 2, 3, 4, 5], 3)
console.log('Contains', resultContains)

var resultcsvToJson = csvToJson("firstname: Arman, lastname: Ortega, age: 25")
console.log('csvToJson', resultcsvToJson)

var resultobjectToQueryString = objectToQueryString({"firstname": "Arman", "lastname": "Ortega", "age": "25"})
console.log('objectToQueryString', resultobjectToQueryString)
