const assert = require('chai').assert;
const dfaCases = require('./Resources/dfaCases.json')
const utilFns = require('./utils/utilFns.js');

describe('DFA', () => {
  describe('createDfa', () => {
    it('shouldAcceptValidInputs', () => {
      dfaCases.forEach((dfaTuple) => {
        let dfaMachine = utilFns.createDfa(dfaTuple);
        dfaTuple['pass-cases'].forEach((passCase) => {
          assert.isTrue(dfaMachine.accept(passCase));
        })
      })
    })

    it('shouldRejectInvalidInputs', () => {
      dfaCases.forEach((dfaTuple) => {
        let dfaMachine = utilFns.createDfa(dfaTuple);
        dfaTuple['fail-cases'].forEach((failCase) => {
          assert.isFalse(dfaMachine.accept(failCase));
        })
      })
    })
  })
})
