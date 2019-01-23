const lib = require('./lib.js');

class DFA {
  constructor(tuple) {
    this.states = tuple.states;
    this.alphabets = tuple.alphabets;
    this.delta = tuple.delta;
    this.startState = tuple['start-state'];
    this.finalState = tuple['final-states'];
  }

  accept(input) {
    let currentState = this.startState;
    input.split("").forEach(alphabet => currentState = lib.getNextState(this.delta, currentState, alphabet));
    return this.finalState.includes(currentState);
  }
}

module.exports = DFA;
