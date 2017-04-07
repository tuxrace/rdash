const { sort, duplicates, contains, uniq, groupBy, cumSum } = require('./rdash')

var items = [
  {key:'key1', value : 10},
  {key:'key2', value : 20},
  {key:'key1', value : 30}
]
var result = groupBy(items, 'key')

console.log(result)