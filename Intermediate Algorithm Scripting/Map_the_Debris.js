//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map((item) => {
    let op = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item['avgAlt'], 3) / GM));
    delete item['avgAlt'];
    item['orbitalPeriod'] = op;
    return item;
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
