const assert = require('chai').assert;
const nfaCases = require('./Resources/nfaCases.json');
const utilFns = require('./utils/utilFns.js');

describe('NFA', () => {
  describe('createNfa', () => {
    it('shouldAcceptValidInputs', () => {
      nfaCases.forEach((nfaTuple) => {
        let nfaMachine = utilFns.createNfa(nfaTuple);
        nfaTuple['pass-cases'].forEach((passCase) => {
          assert.isTrue(nfaMachine.accept(passCase));
        })
      })
    })

    it('shouldRejectInvalidInputs', () => {
      nfaCases.forEach((nfaTuple) => {
        let nfaMachine = utilFns.createNfa(nfaTuple);
        nfaTuple['fail-cases'].forEach((failCase) => {
          assert.isFalse(nfaMachine.accept(failCase));
        })
      })
    })
  })
})
