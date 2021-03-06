var assert = require('assert'),
  Canadarm = require('../../build/canadarm.min');

describe('Canadarm', function(){
  describe('#level', function (){

    it('uses standard log names', function (){
      assert(Canadarm.level.FATAL === 'FATAL');
      assert(Canadarm.level.ERROR === 'ERROR');
      assert(Canadarm.level.WARN  === 'WARN');
      assert(Canadarm.level.INFO  === 'INFO');
      assert(Canadarm.level.DEBUG === 'DEBUG');
    });
  });
});