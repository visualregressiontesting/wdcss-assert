client
  .url('http://www.example.org')
  .webdrivercss('header', {
      name: 'header',
      elem: '#header'
  }, function(err,res) {
      assert.ifError(err);

      console.log(res);

      // this will break the test if screenshot is not within the mismatch tolerance
      assert.ok(res.isWithinMisMatchTolerance);
  })
