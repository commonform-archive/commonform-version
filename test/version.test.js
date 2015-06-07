var version = require('..');

require('tape')('version', function(test) {
  test.equal(version('1.0.0'), true, 'accepts a valid version');
  test.equal(version('v1.0.0'), false, 'rejects v-prefixed versions');
  test.end();
});
