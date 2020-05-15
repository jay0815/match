var match = require('../index.js').match;
var expect = require('chai').expect;

describe('test match', () => {
  it('has import match', () => {
    expect(match).to.be.a('function');
  });
});
describe('Result Success Testing', function () {
  it('pattern: a, string: a', function () {
    expect(match('a', 'a')).to.be.equal(true);
  })
  it('pattern: 1, string: 1', function () {
    expect(match('1', '1')).to.be.equal(true);
  })
  it('pattern: +, string: +', function () {
    expect(match('+', '+')).to.be.equal(true);
  })
  it('pattern: 涨, string: 涨', function () {
    expect(match('涨', '涨')).to.be.equal(true);
  })
  it("pattern: '', string: ''", function () {
    expect(match('', '')).to.be.equal(true);
  })

  it('pattern: ab, string: ab', function () {
    expect(match('ab', 'ab')).to.be.equal(true);
  })
  it('pattern: ab, string: aab', function () {
    expect(match('ab', 'aab')).to.be.equal(true);
  })
  it('pattern: ab, string: aaab', function () {
    expect(match('ab', 'aaab')).to.be.equal(true);
  })
  it('pattern: ab, string: abb', function () {
    expect(match('ab', 'abb')).to.be.equal(true);
  })

  it('pattern: abc, string: abc', function () {
    expect(match('abc', 'abc')).to.be.equal(true);
  })
  it('pattern: abc, string: aabc', function () {
    expect(match('abc', 'aabc')).to.be.equal(true);
  })
  it('pattern: abc, string: aaabc', function () {
    expect(match('abc', 'aaabc')).to.be.equal(true);
  })
  it('pattern: abc, string: abcc', function () {
    expect(match('abc', 'abcc')).to.be.equal(true);
  })
  it('pattern: abc, string: abccc', function () {
    expect(match('abc', 'abcc')).to.be.equal(true);
  })


  it('pattern: aab, string: aaab', function () {
    expect(match('aab', 'aaab')).to.be.equal(true);
  })
  it('pattern: abbb, string: abaabbb', function () {
    expect(match('abbb', 'abaabbb')).to.be.equal(true);
  })

});
describe('break branche test', function () {
  it('pattern: abcdefg, string: abcdefgabcdefg', function () {
    expect(match('abcdefg', 'abcdefgabcdefg')).to.be.equal(true);
  })
});
