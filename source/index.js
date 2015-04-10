var semver = require('semver');

module.exports = function(argument) {
  return (
    semver.valid(argument) &&
    semver.clean(argument) === argument
  );
};

module.exports.version = '1.0.0';
