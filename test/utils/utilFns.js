const DFA = require('../../src/dfa.js');
const NFA = require('../../src/nfa.js');

function createDfa(dfaTuple) {
  return new DFA(dfaTuple['tuple']);
}

function createNfa(nfaTuple) {
  return new NFA(nfaTuple['tuple']);
}

module.exports = {
  createDfa,
  createNfa
};
