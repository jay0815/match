var match = require('../index.js').match;
var expect = require('chai').expect;

describe('test match', () => {
  it('has import match', () => {
    expect(match).to.be.a('function');
  });
});
describe('Result Failed Testing', function () {

  it('pattern: ab, string: ba', function () {
    expect(match('ab', 'ba')).to.be.equal(false);
  })
  it('pattern: ab, string: bb', function () {
    expect(match('ab', 'bb')).to.be.equal(false);
  })
  it('pattern: ab, string: bca', function () {
    expect(match('ab', 'bca')).to.be.equal(false);
  })
  it('pattern: ab, string: acb', function () {
    expect(match('ab', 'acb')).to.be.equal(false);
  })

  it('pattern: abb, string: aaab', function () {
    expect(match('abb', 'aaab')).to.be.equal(false);
  })
  it('pattern: aabb, string: aaab', function () {
    expect(match('aabb', 'aaab')).to.be.equal(false);
  })

  it('pattern: aabbbc, string: aabbbbc', function () {
    expect(match('aabbbc', 'aabbbbc')).to.be.equal(false);
  })
  it('pattern: abbb, string: abb', function () {
    expect(match('abbb', 'abb')).to.be.equal(false);
  })
  it('pattern: abcd, string: aababcabc', function () {
    expect(match('abcd', 'aababcabc')).to.be.equal(false);
  })
  it('pattern: abcd, string: aabdabdcabc', function () {
    expect(match('abcd', 'aababcabc')).to.be.equal(false);
  })
  it('pattern: abc, string: abab', function () {
    expect(match('abc', 'abab')).to.be.equal(false);
  })
});
