var expect = require('chai').expect;
const { sort,
        duplicates,
        contains,
        uniq,
        groupBy,
        cumSum,
        unionBySumAt,
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

  it('test unionBySumAt() function', function(done) {
    var items = [
      {key:'key1', value:10},
      {key:'key2', value:20},
      {key:'key3', value:30},
      {key:'key1', value:40}
    ];
    var result = unionBySumAt(items,'key','value');
    var data = [{"key":"key1","value":50},{"key":"key2","value":20},{"key":"key3","value":30}];
    expect(result).to.deep.equal(data);
    done();
  });

  it('test sort() function', function(done){
    var result = sort([10,8,2,1,7,5]);
    expect(result).to.deep.equal([1,2,5,7,8,10]);
    done();
  });

  it('test duplicates() function', function(done){
    var result = duplicates([1,8,2,1,7,5,2]);
    expect(result).to.deep.equal([1,2,1,2]);
    done();
  });

  it('test factorial() function', function(done) {
    var ary = [];
    for(i=1;i<5;i++){
      ary.push(factorial(i));
    }
    expect(ary).to.deep.equal([1,2,6,24]);
    done();
  });

});
