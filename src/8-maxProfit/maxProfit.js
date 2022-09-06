export const maxProfit = (prices) => {
  if (!prices) throw new Error('prices param must be provided')
  if (!Array.isArray(prices)) throw new Error('prices params must be an array')
  prices.forEach((el) => {
    if (typeof el !== 'number') throw new Error('prices must be an array of numbers')
  })

  const min = Math.min(...prices)
  const minPos = prices.indexOf(Math.min(...prices))
  const max = Math.max(...prices)
  const maxPos = prices.indexOf(Math.max(...prices))

  if (minPos === maxPos) return -1
  if (minPos < maxPos) return max - min
  if (maxPos === 0) {
    ;[, ...prices] = prices
    return maxProfit(prices)
  }
  if (minPos === prices.length - 1) {
    prices.pop()
    return maxProfit(prices)
  }
}
