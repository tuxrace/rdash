# 👟 rdash
> The recreational lodash

 ![](https://github.com/tuxrace/rdash/workflows/rdash-ci/badge.svg)

## Contribute Guide
1. Fork from develop branch.
2. Make a PR to develop branch.

## To install
Run the npm install command first, it will install in your local machine all the required modules.    

    npm install

## To build

    npm run build

## Run the Examples

Next, you need to install a web server to serve our app. We suggest to use simplehttpserver.    

    npm install simplehttpserver -g    
    simplehttpserver .

## To test

    npm test

All test should be 100% passed.    

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

## duplicates
    const { duplicates } = require('./rdash')
    const result = duplicates([1,8,2,1,7,5,2])
    console.log(result)

    Output:
    [1,2]

## factorial(number)
    const { factorial } = require('./rdash')
    const result = factorial(3)
    console.log(result)

    Output:
    6

## isPrime(number)
    const { isPrime } = require('./rdash')
    const result = isPrime(3)
    console.log(result)

    Output:
    true

## avg([number])
    const { avg } = require('./rdash')
    const result = avg([5, 10, 15, 20, 25])
    console.log(result)

    Output:
    15

## isPalindrome(string)
    const { isPalindrome } = require('./rdash')
    console.log(isPalindrome('madam'))

    Output:
    true

## debounce(function)
