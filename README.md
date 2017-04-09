# rdash
The recreational lodash

## To build
If you don't have a webpack in your local you need to install it first: ***$ npm install -g webpack***.    
Once installed you can now run the command:    
***$ webpack***    
Next, you need to install a web server to serve our app. We suggest to use simplehttpserver.    
***$ npm install simplehttpserver -g***    
***$ simplehttpserver .***    

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

    Output:
    true

## cumSum([arr])
    const { cumSum } = require('./rdash')
    const result = cumSum([1,2,3,4,5])
    console.log(result)

    Output:
    Array [ 1, 3, 6, 10, 15 ]


## groupBySumAt([arr], byKey, sumAt)
    const { groupBySumAt } = require('./rdash')
    var items = [
      {key:'key1', value:10},
      {key:'key2', value:20},
      {key:'key3', value:30},
      {key:'key1', value:40}
    ]
    const result = groupBySumAt(items,'key','value')
    console.log(result)

    Output:
    [{"key":"key1","value":50},{"key":"key2","value":20},{"key":"key3","value":30}]

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
