const assert = require('chai').assert;
const utils = require('../src/utils.js');
const nfaCases = require('./Resources/nfaCases.json');

describe('UtilsTest', () => {
  describe('intersectionOf', () => {
    it('shouldAssertIfFinalStateIncludesCurrState', ()=>{
      let finalStates = ['q3', 'q6'], currState = 'q6';
      assert.isTrue(utils.intersectionOf(currState, finalStates));
    })

    it('shouldDenyIfFinalStateDoesNotIncludeCurrState', ()=>{
      let finalStates = ['q3', 'q6'], currState = 'q5';
      assert.isFalse(utils.intersectionOf(currState, finalStates));
    })
  })

  describe('getNextState', () => {
    it('shouldGetNextStateGivenDeltaAndSymbol', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = 'q2', symbol = '0', reqState = 'q3';
      assert.equal(utils.getNextState(delta, state, symbol), reqState);
    })
  })

  describe('hasSymbol', () => {
    it('shouldReturnTrueIfSymbolIsPresent', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = 'q2', symbol = '0';
      assert.isTrue(utils.hasSymbol(delta, state, symbol));
    })

    it('shouldReturnFalseIfSymbolIsNotPresent', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = 'q2', symbol = '1';
      assert.isFalse(utils.hasSymbol(delta, state, symbol));
    })
  })

  describe('getNextState', () => {
    it('shouldGetNextStateGivenDeltaAndSymbol', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = 'q2', symbol = '0', reqState = 'q3';
      assert.equal(utils.getNextState(delta, state, symbol), reqState);
    })
  })

  describe('getStatesWithSymbol', () => {
    it('shouldGetTheStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = ['q1'], symbol = 'e';
      assert.deepEqual(utils.getStatesWithSymbol(delta, state, symbol), ['q1']);
    })

    it('shouldGetOnlyTheStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = ['q1', 'q2'], symbol = 'e';
      assert.deepEqual(utils.getStatesWithSymbol(delta, state, symbol), ['q1']);
    })

    it('shouldGetAllTheStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[4]['tuple']['delta'], state = ['q1', 'q2', 'q3'], symbol = 'e';
      assert.deepEqual(utils.getStatesWithSymbol(delta, state, symbol), ['q1', 'q2']);
    })

    it('shouldReturnEmptyWhenNoAssociatedStates', ()=>{
      let delta = nfaCases[4]['tuple']['delta'], state = ['q3','q5'], symbol = 'e';
      assert.deepEqual(utils.getStatesWithSymbol(delta, state, symbol), []);
    })
  })

  describe('getNextPossStatesGivenEpsilonAsAnSymbol', () => {
    it('shouldGetTheNextStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = ['q1'], symbol = 'e';
      assert.deepEqual(utils.getNextPossStates(delta, state, symbol), ['q2', 'q5']);
    })

    it('shouldGetAllNextTheStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[4]['tuple']['delta'], state = ['q1', 'q2'], symbol = 'e';
      assert.deepEqual(utils.getNextPossStates(delta, state, symbol), ['q2', 'q4', 'q3']);
    })
  })

  describe('shouldUpdateCurrentStates', () => {
    it('shouldUpdateTheCurrentStatesGivenAnEpsilon', ()=>{
      let delta = nfaCases[0]['tuple']['delta'], state = ['q1'];
      assert.deepEqual(utils.updateCurrentStates(delta, state), ['q1','q2', 'q5']);
    })

    it('shouldGetAllNextTheStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[4]['tuple']['delta'], state = ['q1', 'q2'];
      assert.deepEqual(utils.updateCurrentStates(delta, state), ['q1', 'q2', 'q4', 'q3', 'q5']);
    })

    it('shouldGetAllTheNextStatesAssosiatedWithTheSymbol', ()=>{
      let delta = nfaCases[9]['tuple']['delta'], state = ['q2', 'q4'];
      assert.deepEqual(utils.updateCurrentStates(delta, state), ['q2', 'q4', 'q3', 'q5', 'q6']);
    })
  })

  describe('shouldGetCurrentStates', () => {
    it('shouldGetTheCurrentStatesGivenASymbol', ()=>{
      let delta = nfaCases[9]['tuple']['delta'], state = ['q1'];
      assert.deepEqual(utils.getCurrentStates(delta, state, "1"), ['q2', 'q4', 'q3', 'q5', 'q6']);
    })
  })
})
