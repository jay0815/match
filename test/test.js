var match = require('../index.js').match;
var expect = require('chai').expect;

describe('test match', () => {
  it('has import match', () => {
    expect(match).to.be.a('function');
  });
});
describe('real test', function () {
  it('pattern: abc, string: abab', function () {
    expect(match('abc', 'abab')).to.be.equal(false);
  })
  it('pattern: ab, string: aaab', function () {
    expect(match('ab', 'aaab')).to.be.equal(true);
  })
  it('pattern: abcd, string: aababcabcd', function () {
    expect(match('abcd', 'aababcabcd')).to.be.equal(true);
  })
  it('pattern: abcd, string: aababcabc', function () {
    expect(match('abcd', 'aababcabc')).to.be.equal(false);
  })
  it('pattern: aaaaab, string: aaaaaab', function () {
    expect(match('aaaaab', 'aaaaaab')).to.be.equal(true);
  })
  it('pattern: abbb, string: abb', function () {
    expect(match('abbb', 'abb')).to.be.equal(false);
  })
  it('pattern: abbb, string: abaaabbb', function () {
    expect(match('abbb', 'abaaabbb')).to.be.equal(true);
  })
  it('pattern: aabbbc, string: aabbbbc', function () {
    expect(match('aabbbc', 'aabbbbc')).to.be.equal(false);
  })
});
