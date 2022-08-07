/* 
给出要找零的钱数，以及可用的硬币面额d1,...dn及数量，找到所需的最少硬币个数方案。
*/

function minCoinChange(coins, amount) {
  const cache = [];
  const makeChage = (value) => {
    if (!value) {
      return []
    }
    if(cache[value]) {
      return cache[value]
    }
    let min = []
    let newMin = [];
    let newAmount;
    for(let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if(newAmount > 0) {
        newMin = makeChage(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('min:', min, 'newMin:', newMin, 'for', newAmount)
      }
    }
    return (cache[value] = min)
  }
  return makeChage(amount)
}

console.log(minCoinChange([1, 5, 10, 25], 36))

