/* eslint-disable no-undef */

const { sort,
  duplicates,
  contains,
  uniq,
  cumSum,
  unionBySumAt,
  factorial,
  isPrime,
  zip,
  unionBy,
  csvToJson,
  avg
} = require('../rdash')

describe('rdash', function () {
  it('test uniq() function', function () {
    var data = [1, 1, 2, 2, 3, 4, 5]
    var result = uniq(data)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('test contains() function', function () {
    var data = [1, 2, 3, 4, 5]
    var result = contains(data, 3)
    expect(result).toBeTruthy()
  })

  it('test cumSum() function', function () {
    var data = [1, 2, 3, 4, 5]
    var result = cumSum(data, 3)
    expect(result).toEqual([1, 3, 6, 10, 15])
  })

  it('test unionBySumAt() function', function () {
    var items = [
      {key: 'key1', value: 10},
      {key: 'key2', value: 20},
      {key: 'key3', value: 30},
      {key: 'key1', value: 40}
    ]
    var result = unionBySumAt(items, 'key', 'value')
    var data = [{'key': 'key1', 'value': 50}, {'key': 'key2', 'value': 20}, {'key': 'key3', 'value': 30}]
    expect(result).toStrictEqual(data)
  })

  it('test sort() function', function () {
    var result = sort([10, 8, 2, 1, 7, 5])
    expect(result).toStrictEqual([1, 2, 5, 7, 8, 10])
  })

  it('test duplicates() function', function () {
    var result = duplicates([1, 8, 2, 1, 7, 5, 2])
    expect(result).toStrictEqual([1, 2])
  })

  it('test factorial() function', function () {
    var result = factorial(10)
    expect(result).toEqual(3628800)
  })

  it('test isPrime() function', function () {
    var result = isPrime(3)
    expect(result).toEqual(true)
  })

  it('test zip() function', function () {
    var result = zip([1, 2, 3], [3, 2, 1])
    expect(result).toStrictEqual([1, 3, 2, 2, 3, 1])
    result = zip([1, 2, 3], [3, 2])
    expect(result).toStrictEqual([1, 3, 2, 2, 3])
    result = zip([1, 2], [3, 2, 1])
    expect(result).toStrictEqual([1, 3, 2, 2, 1])
    result = zip([], [2])
    expect(result).toStrictEqual([2])
    result = zip([2], [])
    expect(result).toStrictEqual([2])
  })

  it('test unionBy() function', function () {
    var item1 = [
      {key: 'key1', value: 10},
      {key: 'key2', value: 20},
      {key: 'key2', value: 30},
      {key: 'key1', value: 40}
    ]
    var result = unionBy(item1, 'key')
    var data = [{key: 'key1', value: 10}, {key: 'key2', value: 20}]
    expect(result).toStrictEqual(data)
  })

  it('test csvToJson() function', function () {
    var str = 'position:Java dev,salary:120000\n'
    var result = csvToJson(str)
    expect(result).toBeTruthy()
    expect(result.split('')).toHaveLength(41)
  })

  it('test average() function', function () {
    var result = avg([5, 10, 15, 20, 25])
    expect(result).toBeTruthy()
    expect(result).toEqual(15)
  })
})
