var expect = require('chai').expect;
const { sort,
        duplicates,
        contains,
        uniq,
        groupBy,
        cumSum,
        groupBySumAt,
        factorial
      } = require('../rdash');

describe('rdash', function() {
  it('test uniq() function', function(done) {
    var data = [1,1,2,2,3,4,5];
    var result = uniq(data);
    expect(result).to.deep.equal([1,2,3,4,5]);
    done();
  });

  it('test contains() function', function(done) {
    var data = [1,2,3,4,5];
    var result = contains(data, 3);
    expect(result).to.equal(true);
    done();
  });

  it('test cumSum() function', function(done) {
    var data = [1,2,3,4,5];
    var result = cumSum(data, 3);
    expect(result).to.deep.equal([1,3,6,10,15]);
    done();
  });

});
