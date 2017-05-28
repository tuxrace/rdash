var expect = require('chai').expect
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
        csvToJson
      } = require('../rdash')

describe('rdash', function () {
  it('test uniq() function', function (done) {
    var data = [1, 1, 2, 2, 3, 4, 5]
    var result = uniq(data)
    expect(result).to.deep.equal([1, 2, 3, 4, 5])
    done()
  })

  it('test contains() function', function (done) {
    var data = [1, 2, 3, 4, 5]
    var result = contains(data, 3)
    expect(result).to.equal(true)
    done()
  })

  it('test cumSum() function', function (done) {
    var data = [1, 2, 3, 4, 5]
    var result = cumSum(data, 3)
    expect(result).to.deep.equal([1, 3, 6, 10, 15])
    done()
  })

  it('test unionBySumAt() function', function (done) {
    var items = [
      {key: 'key1', value: 10},
      {key: 'key2', value: 20},
      {key: 'key3', value: 30},
      {key: 'key1', value: 40}
    ]
    var result = unionBySumAt(items, 'key', 'value')
    var data = [{'key': 'key1', 'value': 50}, {'key': 'key2', 'value': 20}, {'key': 'key3', 'value': 30}]
    expect(result).to.deep.equal(data)
    done()
  })

  it('test sort() function', function (done) {
    var result = sort([10, 8, 2, 1, 7, 5])
    expect(result).to.deep.equal([1, 2, 5, 7, 8, 10])
    done()
  })

  it('test duplicates() function', function (done) {
    var result = duplicates([1, 8, 2, 1, 7, 5, 2])
    expect(result).to.deep.equal([1, 2, 1, 2])
    done()
  })

  it('test factorial() function', function (done) {
    var ary = []
    for (var i = 1; i < 5; i++) {
      ary.push(factorial(i))
    }
    expect(ary).to.deep.equal([1, 2, 6, 24])
    done()
  })

  it('test isPrime() function', function (done) {
    var result = isPrime(3)
    expect(result).to.equal(true)
    done()
  })

  it('test zip() function', function (done) {
    var result = zip([1, 2, 3], [3, 2, 1])
    expect(result).to.deep.equal([1, 3, 2, 2, 3, 1])
    result = zip([1, 2, 3], [3, 2])
    expect(result).to.deep.equal([1, 3, 2, 2, 3])
    result = zip([1, 2], [3, 2, 1])
    expect(result).to.deep.equal([1, 3, 2, 2, 1])
    result = zip([], [2])
    expect(result).to.deep.equal([2])
    result = zip([2], [])
    expect(result).to.deep.equal([2])
    done()
  })

  it('test unionBy() function', function (done) {
    var item1 = [
      {key: 'key1', value: 10},
      {key: 'key2', value: 20},
      {key: 'key2', value: 30},
      {key: 'key1', value: 40}
    ]
    var result = unionBy(item1, 'key')
    var data = [{key: 'key1', value: 10}, {key: 'key2', value: 20}]
    expect(result).to.deep.equal(data)
    done()
  })

  it('test csvToJson() function', function (done) {
    var str = "position:Java dev,salary:120000\n"
    var result = csvToJson(str)
    expect(result).to.be.a('string')
    expect(result).to.have.lengthOf(41)
    done()
  })
})
