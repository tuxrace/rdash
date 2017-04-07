const { sort, duplicates, contains, uniq, groupBy, cumSum } = require('./rdash')

var items = [
  {key:'key1', value : 10},
  {key:'key2', value : 20},
  {key:'key1', value : 30}
]
var result = groupBy([2,3,7,1,4])

console.log(result)