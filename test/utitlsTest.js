const assert = require('chai').assert;
const utils = require('../src/utils.js');

describe('UtilsTest', () => {
  describe('shouldGeneratePowerSet', () => {
    it('shouldGeneratePowerSetGivenASet', () => {
      let givenSet = ['q1', 'q2', 'q3'];
      let expected = ['', 'q1', 'q2', 'q1,q2', 'q3', 'q1,q3', 'q2,q3', 'q1,q2,q3'];
      assert.deepEqual(utils.generatePowerSet(givenSet), expected);
    })
  })

  describe('intersectionOf', () => {
    it('shouldAssertIfFinalStateIncludesCurrState', () => {
      let finalStates = ['q3', 'q6'],
        currState = 'q6';
      assert.isTrue(utils.intersectionOf(currState, finalStates));
    })

    it('shouldDenyIfFinalStateDoesNotIncludeCurrState', () => {
      let finalStates = ['q3', 'q6'],
        currState = 'q5';
      assert.isFalse(utils.intersectionOf(currState, finalStates));
    })
  })
})
