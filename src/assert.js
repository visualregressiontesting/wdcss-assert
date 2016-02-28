var assert = require("assert");

module.exports = function assertShots (err, shots) {
  assert.ifError(err);

  Object.keys(shots).forEach(function(element) {
    shots[element].forEach(function(shot) {
      assert.ok(shot.isWithinMisMatchTolerance, shot.message);
    })
  });
};