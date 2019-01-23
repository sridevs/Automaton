const lib = require('./lib.js');

class NFA {
  constructor(tuple) {
    this.states = tuple.states;
    this.alphabets = tuple.alphabets;
    this.delta = tuple.delta;
    this.startState = tuple['start-state'];
    this.finalStates = tuple['final-states'];
  }

  getStates(){
    return this.states;
  }

  getAlphabets(){
    return this.alphabets;
  }

  getDelta(){
    return this.delta;
  }

  getStartState(){
    return this.startState;
  }

  getFinalStates(){
    return this.finalStates;
  }

  accept(input) {
    let currStates = [this.startState];
    let symbols = input ? input.split("") : ["e"];
    symbols.forEach(symbol => currStates = lib.getCurrentStates(this.delta, currStates, symbol));
    return lib.isCurrentStateAcceptable(currStates, this.finalStates);
  }
}

module.exports = NFA;
