function unique(element, index, arr) {
  return arr.indexOf(element) == index;
}

function mergeMembers(list) {
  return [].concat(...list);
}

function intersectionOf(state, finalStates) {
  return finalStates.includes(state);
}

function getNextState(delta, state, symbol) {
  return nextstate = delta[state] ? delta[state][symbol] : delta[state];

}

function hasSymbol(delta, state, symbol) {
  return getNextState(delta, state, symbol) != undefined;
}

function getStatesWithSymbol(delta,states,symbol) {
  return states.filter(state => hasSymbol(delta, state, symbol));
}

function getNextPossStates(delta, statesWithEpsilon, currStates) {
  result = mergeMembers(statesWithEpsilon.map(state => getNextState(delta, state, "e")));
  return result.filter(elem => !currStates.includes(elem));
}

function updateCurrentStates(delta, currStates) {
  let statesWithEpsilon = getStatesWithSymbol(delta, currStates, "e");
  while (statesWithEpsilon.length) {
    nextPossStates = getNextPossStates(delta, statesWithEpsilon, currStates);
    currStates = [...currStates, ...nextPossStates];
    statesWithEpsilon = getStatesWithSymbol(delta, nextPossStates, "e");
  }
  return currStates.filter(unique);
}

function getCurrentStates(delta, currStates, symbol) {
  currStates = updateCurrentStates(delta, currStates);
  possNextStates = mergeMembers(currStates.map(state => getNextState(delta, state, symbol)));
  return mergeMembers(updateCurrentStates(delta, possNextStates));
}

module.exports = {
  intersectionOf,
  getNextState,
  hasSymbol,
  getStatesWithSymbol,
  getNextPossStates,
  updateCurrentStates,
  getCurrentStates
}
