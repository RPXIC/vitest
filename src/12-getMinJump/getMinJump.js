export const getMinJump = (obstacles) => {
  if (!obstacles) throw new Error('obstacles param must be provided')
  if (!Array.isArray(obstacles)) throw new Error('obstacles must be an array')
  if (obstacles.length === 0) throw new Error('obstacles must have values')
  obstacles.forEach((el) => {
    if (typeof el !== 'number') throw new Error('obstacles must be an array of numbers')
  })

  const newRoute = []

  for (var i = 0; i <= Math.max(...obstacles); i++) {
    newRoute.push({ pos: i, obstacle: obstacles.includes(i) })
  }

  let every = 1

  const trySortObstaclesEvery = () => {
    for (var i = 0; i <= Math.max(...obstacles); i += every) {
      if (newRoute[i].obstacle) {
        every++
        return trySortObstaclesEvery(every)
      }
    }
    return every
  }

  const res = trySortObstaclesEvery(every)

  return res
}
