const assert = require('chai').assert;
const nfaToDfaCases = require('./Resources/nfaToDfaCases.json')
const utilFns = require('./utils/utilFns.js');

describe('NfaToDfaConvertor', () => {
  describe('convertNfaToDfa', () => {
    it('nfaPassCasesShouldBeAcceptedByDfaPostConversion', () => {
      nfaToDfaCases.forEach((nfaTuple) => {
        console.log("-------------",nfaTuple.name);
        let nfaToDfaConvertor = utilFns.createNfaToDfaConvertor(nfaTuple);
        let dfaTuple = {};
        dfaTuple['tuple'] = nfaToDfaConvertor.convert();
        let dfaMachine = utilFns.createDfa(dfaTuple);
        nfaTuple['pass-cases'].forEach((passCase) => {
          assert.isTrue(dfaMachine.accept(passCase));
        })
      })
    })

    it('nfaFailCasesShouldBeRejectedByDfaPostConversion', () => {
      nfaToDfaCases.forEach((nfaTuple) => {
        let nfaToDfaConvertor = utilFns.createNfaToDfaConvertor(nfaTuple);
        let dfaTuple = {};
        dfaTuple['tuple'] = nfaToDfaConvertor.convert();
        let dfaMachine = utilFns.createDfa(dfaTuple);
        nfaTuple['fail-cases'].forEach((failCase) => {
          assert.isFalse(dfaMachine.accept(failCase));
        })
      })
    })
  })
})
