const utils = require('./utils.js');

function getNextState(delta, state, symbol) {
  return delta[state] ? delta[state][symbol] : delta[state];

}

function hasSymbol(delta, state, symbol) {
  return getNextState(delta, state, symbol) != undefined;
}

function getStatesWithSymbol(delta, states, symbol) {
  return states.filter(state => hasSymbol(delta, state, symbol));
}

function getNextPossStates(delta, statesWithEpsilon, currStates) {
  result = utils.mergeMembers(statesWithEpsilon.map(state => getNextState(delta, state, "e")));
  return result.filter(elem => !currStates.includes(elem));
}

function updateCurrentStates(delta, currStates) {
  let statesWithEpsilon = getStatesWithSymbol(delta, currStates, "e");
  while (statesWithEpsilon.length) {
    nextPossStates = getNextPossStates(delta, statesWithEpsilon, currStates);
    currStates = [...currStates, ...nextPossStates];
    statesWithEpsilon = getStatesWithSymbol(delta, nextPossStates, "e");
  }
  return currStates.filter(utils.unique);
}

function isCurrentStateAcceptable(currStates, finalStates) {
  return currStates.some(state => utils.intersectionOf(state, finalStates));
}
function getCurrentStates(delta, currStates, symbol) {
  currStates = updateCurrentStates(delta, currStates);
  possNextStates = utils.mergeMembers(currStates.map(state => getNextState(delta, state, symbol)));
  return utils.mergeMembers(updateCurrentStates(delta, possNextStates));
}

function getStartState(delta, state, symbol) {
  let nextStates = getCurrentStates(delta, [state], symbol).filter(ele => ele != undefined);
  nextStates.unshift(state);
  nextStates.sort();
  return nextStates.join(",");
}

module.exports = {
  getNextState,
  hasSymbol,
  getStatesWithSymbol,
  getNextPossStates,
  updateCurrentStates,
  getCurrentStates,
  getStartState,
  isCurrentStateAcceptable
}
