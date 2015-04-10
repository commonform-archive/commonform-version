/* jshint mocha: true */
var version = require('..');
var expect = require('chai').expect;

describe('version', function() {
  it('accepts a valid version', function() {
    expect(version('1.0.0'))
      .to.equal(true);
  });

  it('rejects v- prefixed version strings', function() {
    expect(version('v1.0.0'))
      .to.equal(false);
  });
});
