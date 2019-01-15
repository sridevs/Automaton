const utils = require('./utils.js');

class NFA {
  constructor(tuple) {
    this.states = tuple.states;
    this.alphabets = tuple.alphabets;
    this.delta = tuple.delta;
    this.startState = tuple['start-state'];
    this.finalStates = tuple['final-states'];
  }

  accept(input) {
    let currStates = [this.startState];
    let symbols = input ? input.split("") : ["e"];
    symbols.forEach(symbol => currStates = utils.getCurrentStates(this.delta, currStates, symbol));
    return [].concat(...currStates).some(state => utils.intersectionOf(state, this.finalStates));
  }
}

module.exports = NFA;
