var match = require('../index.js').match;
var expect = require('chai').expect;

describe('test match', () => {
  it('has import match', () => {
    expect(match).to.be.a('function');
  });
});
describe('Result Failed Testing', function () {

  const s = 'a';
  it('pattern: null, string: a', function () {
    expect(match(null, s)).to.be.equal(false);
  })
  it('pattern: undefined, string: a', function () {
    expect(match(void 0, s)).to.be.equal(false);
  })

  const twoByte = "\u039a\u0391\u03a3\u03a3\u0395";
  const Notbeta = '\u0392';
  const NotAlphaSigmaEpsilon = '\u0391\u03a3\u0395';
  it(`pattern: ${Notbeta}, string: ${twoByte}`, function () {
    expect(match(Notbeta, twoByte)).to.be.equal(false);
  });
  it(`pattern: ${NotAlphaSigmaEpsilon}, string: ${twoByte}`, function () {
    expect(match(NotAlphaSigmaEpsilon, twoByte)).to.be.equal(false);
  });

  const rs = 'asdf[a-z]+(asdf)?';
  it(`pattern: (bar)?, string: ${rs}`, function () {
    expect(match('(bar)?', rs)).to.be.equal(false);
  });

  // Test cases found in FF
  const ffString = 'abc';
  it(`pattern: d, string: ${ffString}`, function () {
    expect(match('d', ffString)).to.be.equal(false);
  });
  it(`pattern: abcd, string: ${ffString}`, function () {
    expect(match('abcd', ffString)).to.be.equal(false);
  });
  it(`pattern: ac, string: ${ffString}`, function () {
    expect(match('ac', ffString)).to.be.equal(false);
  });
  it(`pattern: cd, string: ${ffString}`, function () {
    expect(match('cd', ffString)).to.be.equal(false);
  });
  it(`pattern: de, string: ${ffString}`, function () {
    expect(match('de', ffString)).to.be.equal(false);
  });
  it(`pattern: dcd, string: ${ffString}`, function () {
    expect(match('dcd', ffString)).to.be.equal(false);
  });
  it(`pattern: dcd, string: xyzzy`, function () {
    expect(match("zy\0", 'xyzzy')).to.be.equal(false);
  });

  const dots = Array(10000).join(".").toString();
  it(`pattern: \x01, string: ${dots}`, function () {
    expect(match('\x01', dots)).to.be.equal(false);
  });
  it(`pattern: \0, string: ${dots}`, function () {
    expect(match("\0", dots)).to.be.equal(false);
  });
  // object
  it(`pattern:  {}, string: Empty object {}`, function () {
    expect(match({}, "Empty object {}")).to.be.equal(false);
  });
  // Array
  // "Array of size 3", val: new Array(3)
  it(`pattern:  new Array(3), string: Array of size 3`, function () {
    expect(match(new Array(3), "Array of size 3")).to.be.equal(false);
  });

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

  // abnormal
  // null
  it('pattern: abc, string: null', function () {
    expect(match('abc', null)).to.be.equal(false);
  })
  it('pattern: 0, string: null', function () {
    expect(match('abc', null)).to.be.equal(false);
  })
  it("pattern: 'null', string: null", function () {
    expect(match('null', null)).to.be.equal(false);
  })
  // undefined
  it('pattern: abc, string: undefined', function () {
    expect(match('abc', void 0)).to.be.equal(false);
  })
  it('pattern: 0, string: undefined', function () {
    expect(match(0, void 0)).to.be.equal(false);
  })
  it("pattern: 'undefined', string: undefined", function () {
    expect(match('undefined', void 0)).to.be.equal(false);
  })
  // other base object in relam exclude(string and number)
  it("pattern: Symbol, string: abc", function () {
    expect(match(Symbol('1'), 'abc')).to.be.equal(false);
  })
  it("pattern: [1], string: abc", function () {
    expect(match([1], 'abc')).to.be.equal(false);
  })
});
