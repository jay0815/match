var match = require("../index.js").match;
var expect = require("chai").expect;

describe("test match", () => {
  it("has import match", () => {
    expect(match).to.be.a("function");
  });
});
describe("Result Success Testing", function() {
  const s = "asdf[a-z]+(asdf)?";
  const st1 = "[a-z]+";
  const st2 = "(asdf)?";
  it(`pattern: ${st1}, string: ${s}`, function() {
    expect(match(st1, s)).to.be.equal(true);
  });
  it(`pattern: ${st2}, string: ${s}`, function() {
    expect(match(st2, s)).to.be.equal(true);
  });

  // Random greek letters
  const Lamda = "\u039a";
  const Alpha = "\u0391";
  const Sigma = "\u03a3";
  const Epsilon = "\u0395";
  const Notbeta = "\u0392";
  const twoByte = `${Lamda}${Alpha}${Sigma}${Sigma}${Epsilon}`;
  // Test single char pattern
  it(`pattern: ${Lamda}, string: ${twoByte}`, function() {
    expect(match(Lamda, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Alpha}, string: ${s}`, function() {
    expect(match(Alpha, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Sigma}, string: ${s}`, function() {
    expect(match(Sigma, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Epsilon}, string: ${s}`, function() {
    expect(match(Epsilon, twoByte)).to.be.equal(true);
  });

  // Test multi-char pattern
  it(`pattern: ${Lamda}${Alpha}, string: ${twoByte}`, function() {
    expect(match(`${Lamda}${Alpha}`, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Alpha}${Sigma}, string: ${twoByte}`, function() {
    expect(match(`${Alpha}${Sigma}`, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Sigma}${Sigma}, string: ${twoByte}`, function() {
    expect(match(`${Sigma}${Sigma}`, twoByte)).to.be.equal(true);
  });
  it(`pattern: ${Sigma}${Epsilon}, string: ${twoByte}`, function() {
    expect(match(`${Sigma}${Epsilon}`, twoByte)).to.be.equal(true);
  });

  // Test cases found in FF
  const ffString = "abc";
  it(`pattern: a, string: ${ffString}`, function() {
    expect(match("a", ffString)).to.be.equal(true);
  });
  it(`pattern: b, string: ${ffString}`, function() {
    expect(match("b", ffString)).to.be.equal(true);
  });
  it(`pattern: c, string: ${ffString}`, function() {
    expect(match("c", ffString)).to.be.equal(true);
  });
  it(`pattern: ab, string: ${ffString}`, function() {
    expect(match("ab", ffString)).to.be.equal(true);
  });
  it(`pattern: bc, string: ${ffString}`, function() {
    expect(match("bc", ffString)).to.be.equal(true);
  });
  it(`pattern: abc, string: ${ffString}`, function() {
    expect(match("abc", ffString)).to.be.equal(true);
  });

  //
  const rs = "asdf[a-z]+(asdf)?";
  it(`pattern: [a-z]+, string: ${rs}`, function() {
    expect(match("[a-z]+", rs)).to.be.equal(true);
  });

  it("pattern: a, string: a", function() {
    expect(match("a", "a")).to.be.equal(true);
  });
  it("pattern: 1, string: 1", function() {
    expect(match("1", "1")).to.be.equal(true);
  });
  it("pattern: +, string: +", function() {
    expect(match("+", "+")).to.be.equal(true);
  });
  it("pattern: 涨, string: 涨", function() {
    expect(match("涨", "涨")).to.be.equal(true);
  });
  // empty
  it("pattern: '', string: ''", function() {
    expect(match("", "")).to.be.equal(true);
  });
  it("pattern: '', string: Empty string", function() {
    expect(match("", "Empty string")).to.be.equal(true);
  });
  // number
  it("pattern: 1234.34, string: Number 1234.34", function() {
    expect(match(1234.34, "Number 1234.34")).to.be.equal(true);
  });
  it("pattern: 0, string: Integer number 0", function() {
    expect(match(0, "Integer number 0")).to.be.equal(true);
  });
  it("pattern: -1, string: Integer number 0", function() {
    expect(match(-1, "Negative number -1")).to.be.equal(true);
  });
  // Boolean
  it("pattern: false, string: Boolean false", function() {
    expect(match(false, "Boolean false")).to.be.equal(true);
  });
  it("pattern: true, string: Boolean true", function() {
    expect(match(true, "Boolean true")).to.be.equal(true);
  });
  // array
  it("pattern: [], string: Empty array []", function() {
    expect(match([], "Empty array []")).to.be.equal(true);
  });

  // self test
  it("pattern: ab, string: ab", function() {
    expect(match("ab", "ab")).to.be.equal(true);
  });
  it("pattern: ab, string: aab", function() {
    expect(match("ab", "aab")).to.be.equal(true);
  });
  it("pattern: ab, string: aaab", function() {
    expect(match("ab", "aaab")).to.be.equal(true);
  });
  it("pattern: ab, string: abb", function() {
    expect(match("ab", "abb")).to.be.equal(true);
  });

  it("pattern: abc, string: aabc", function() {
    expect(match("abc", "aabc")).to.be.equal(true);
  });
  it("pattern: abc, string: aaabc", function() {
    expect(match("abc", "aaabc")).to.be.equal(true);
  });
  it("pattern: abc, string: abcc", function() {
    expect(match("abc", "abcc")).to.be.equal(true);
  });
  it("pattern: abc, string: abccc", function() {
    expect(match("abc", "abcc")).to.be.equal(true);
  });

  it("pattern: aab, string: aaab", function() {
    expect(match("aab", "aaab")).to.be.equal(true);
  });
  it("pattern: abbb, string: abaabbb", function() {
    expect(match("abbb", "abaabbb")).to.be.equal(true);
  });
});
describe("break branche test", function() {
  it("pattern: abcdefg, string: abcdefgabcdefg", function() {
    expect(match("abcdefg", "abcdefgabcdefg")).to.be.equal(true);
  });
});
