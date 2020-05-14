var match = require('../index.js').match;
var expect = require('chai').expect;

describe('test match', () => {
  it('has import match', () => {
    expect(match).to.be.a('function');
  });
});
describe('real test', function () {
  it('abc | abab, pattern: abc, string: abab', function () {
    expect(match('abc', 'abab')).to.be.equal(false);
  })
  it('ab | aaab, pattern: ab, string: aaab', function () {
    expect(match('ab', 'aaab')).to.be.equal(true);
  })
  it('abcd | aababcabcd, pattern: abcd, string: aababcabcd', function () {
    expect(match('abcd', 'aababcabcd')).to.be.equal(true);
  })
  it('abcd | aababcabc, pattern: abcd, string: aababcabc', function () {
    expect(match('abcd', 'aababcabc')).to.be.equal(false);
  })
});
