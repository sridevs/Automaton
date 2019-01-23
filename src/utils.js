function unique(element, index, arr) {
  return arr.indexOf(element) == index;
}

function mergeMembers(list) {
  return [].concat(...list);
}

function generatePowerSet(array) {
  let result = [
    ''
  ];
  let arr = array.filter(unique);
  array.forEach((ele) => {
    let len = result.length;
    for (let x = 0; x < len; x++) {
      sum = x==0 ? result[x] + ele : result[x] + ',' + ele;
      sum = sum.split(',').sort().join();
      result.push(sum);
    }
  })
  return result;
}

function intersectionOf(state, finalStates) {
  return finalStates.includes(state);
}

module.exports = {
  unique,
  intersectionOf,
  mergeMembers,
  generatePowerSet,
}
