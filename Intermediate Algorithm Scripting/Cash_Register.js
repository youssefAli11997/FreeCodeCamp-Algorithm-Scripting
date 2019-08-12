//link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  price *= 100;
  cash *= 100;

  let changeValue = cash - price;
  let copiedCid = JSON.parse(JSON.stringify(cid));
  
  let changeObj = {
    'status': "INSUFFICIENT_FUNDS",
    'change': []
  };

  let getValueOfOneFrom = (x) => {
    switch(x){
      case 0: return 1;
      case 1: return 5;
      case 2: return 10;
      case 3: return 25;
      case 4: return 100;
      case 5: return 500;
      case 6: return 1000;
      case 7: return 2000;
      case 8: return 10000;
    }
  };

  let startingPoint = (() => {
    if(changeValue >= 10000) return cid.length-1;
    if(changeValue >= 2000) return cid.length-2;
    if(changeValue >= 1000) return cid.length-3;
    if(changeValue >= 500) return cid.length-4;
    if(changeValue >= 100) return cid.length-5;
    if(changeValue >= 25) return cid.length-6;
    if(changeValue >= 10) return cid.length-7;
    if(changeValue >= 5) return cid.length-8; //1
    if(changeValue >= 1) return cid.length-9; //0
  })();

  for(let i = startingPoint; i>=0; i--){
    if(changeValue > 0){
      copiedCid[i][1] *= 100;

      let possibleChangeAmountFromCid = changeValue - (changeValue % getValueOfOneFrom(i));

      if(possibleChangeAmountFromCid == 0)
        continue;

      let amount = Math.min(possibleChangeAmountFromCid, copiedCid[i][1]);
      let amountArr = [copiedCid[i][0], amount / 100];

      changeObj['change'].push(amountArr);

      changeValue -= amount;
      copiedCid[i][1] -= amount;
    }
  }

  changeObj['status'] = (() => {
    if(changeValue > 0){
      changeObj['change'] = [];
      return "INSUFFICIENT_FUNDS";
    }
    for(let i=0; i<copiedCid.length; i++){
      if(copiedCid[i][1] > 0)
        return "OPEN";
    }
    changeObj['change'] = cid;
    return "CLOSED";
  })();

  return changeObj;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
