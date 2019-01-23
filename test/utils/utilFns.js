const prefix = '../../src/';
const DFA = require(prefix + 'dfa.js');
const NFA = require(prefix + 'nfa.js');
const NfaToDfaConvertor = require(prefix + 'NfaToDfaConvertor.js');

function getTuple(tuplet) {
  return tuplet['tuple'];
}
function createDfa(dfaTuple) {
  return new DFA(getTuple(dfaTuple));
}

function createNfa(nfaTuple) {
  return new NFA(getTuple(nfaTuple));
}

function createNfaToDfaConvertor(nfaTuple) {
  return new NfaToDfaConvertor(getTuple(nfaTuple));
}

module.exports = {
  createDfa,
  createNfa,
  createNfaToDfaConvertor
};
