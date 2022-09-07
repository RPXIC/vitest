export const getCoins = (change) => {
  if (!change) throw new Error('change param must be provided')
  if (typeof change !== 'number') throw new Error('change param must be a number')

  const coins = [50, 20, 10, 5, 2, 1]
  const result = [0, 0, 0, 0, 0, 0]

  const check = (change) => {
    if (change <= 0) return

    if (change - 50 >= 0) {
      result[5] += 1
      return check(change - 50)
    }
    if (change - 20 >= 0) {
      result[4] += 1
      return check(change - 20)
    }
    if (change - 10 >= 0) {
      result[3] += 1
      return check(change - 10)
    }
    if (change - 5 >= 0) {
      result[2] += 1
      return check(change - 5)
    }
    if (change - 2 >= 0) {
      result[1] += 1
      return check(change - 2)
    }
    if (change - 1 >= 0) {
      result[0] += 1
      return check(change - 1)
    }
  }

  check(change)

  return result
}
