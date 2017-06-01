const { sort, duplicates, contains, uniq, unionBy, cumSum, 
  unionBySumAt, factorial } = require('./rdash')

var items = [
  {key: 'key1', value: 10},
  {key: 'key2', value: 20},
  {key: 'key2', value: 30},
  {key: 'key1', value: 30},
  {key: 'key3', value: 10}
]

var result = unionBySumAt(items, 'key', 'value')

console.log(result, factorial(4))
