const lib = require('./lib.js');
const utils = require('./utils.js');
const NFA = require('./NFA.js');

class NfaToDfaConvertor {
  constructor(tuple) {
    this.nfa = new NFA(tuple);
  }

  convert() {
    let nfaFinalStates = this.nfa.getFinalStates();
    let nfaDelta = this.nfa.getDelta();
    let alphabets = this.nfa.getAlphabets();
    let dfaStates = utils.generatePowerSet(this.nfa.getStates());
    let startState = lib.hasSymbol(nfaDelta, 'q1', 'e') ? lib.getStartState(nfaDelta, 'q1', 'e') : 'q1';
    let finalStates = dfaStates.filter(state => lib.isCurrentStateAcceptable(nfaFinalStates, state));
    let dfaDelta = {};
    let dfaTuple = {};
    dfaStates.forEach((state) => {
      let currStates = state.split(',');
      let alphabetsWithNextState = {};
      alphabets.forEach((alphabet) => {
        let result = lib.getCurrentStates(nfaDelta, currStates, alphabet);
        result = result.filter(ele => ele != undefined);
        result.sort();
        alphabetsWithNextState[alphabet] = result.join();
      })
      dfaDelta[state] = alphabetsWithNextState;
    })
    dfaTuple['states'] = dfaStates;
    dfaTuple['alphabets'] = alphabets;
    dfaTuple['delta'] = dfaDelta;
    dfaTuple['start-state'] = startState;
    dfaTuple['final-states'] = finalStates;
    return dfaTuple;
  }
}

module.exports = NfaToDfaConvertor;
