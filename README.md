# rdash
The recreational lodash

## To build
If you don't have a webpack in your local you need to install it first : $ npm install --save-dev webpack. Once installed you can now run the command    
$ webpack

## To use
    const { uniq } = require('./rdash')
    const result = uniq([1,1,2,2,3,4,5])
    console.log(result)

    Output:
    1,2,3,4,5

## contains([arr], item)
    const { contains } = require('./rdash')
    const result = contains([1,2,3,4,5], 3)
    console.log(result)

## cumSum([arr])
    const { cumSum } = require('./rdash')
    const result = cumSum([1,2,3,4,5])
    console.log(result)

## groupBySumAt([arr], byKey, sumAt)
    const { groupBySumAt } = require('./rdash')
    var items = {
      {key:'key1', value:10},
      {key:'key2', value:20},
      {key:'key3', value:30},
      {key:'key1', value:40}
    }
    const result = groupBySumAt(items,'key','value')
    console.log(result)

## sort([arr])
    const { sort } = require('./rdash')
    const result = sort([10,8,2,1,7,5])
    console.log(result)

    Output:
    1,2,5,7,8,10

## uniq([arr])
    const { uniq } = require('./rdash')
    const result = uniq([1,1,2,2,3,4,5])
    console.log(result)

    Output:
    1,2,3,4,5

