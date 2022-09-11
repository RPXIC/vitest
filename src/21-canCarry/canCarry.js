export const canCarry = (capacity, trip) => {
  if (!capacity) throw new Error('capacity parameter must be provided')
  if (typeof capacity !== 'number') throw new Error('capacity parameter must be a number')
  if (!trip) throw new Error('trip parameter must be provided')
  if (!Array.isArray(trip)) throw new Error('trip parameter must be an array')
  if (trip.length === 0) throw new Error('trip parameter must have a value')
  trip.forEach((el) => {
    if (!Array.isArray(el)) throw new Error('trip values must be an array')
    if (el.length === 0) throw new Error('trip values must be an array with values')
    el.forEach((subEl) => {
      if (typeof subEl !== 'number') throw new Error('trip values must be an array of number values')
    })
  })

  let total = 0

  for (let i = 0; i < trip.length; i++) {
    const [gifts, from] = trip[i]

    if (i !== 0 && trip[i - 1][2] <= from) {
      total -= trip[i - 1][0]
    }
    total += gifts
  }
  return total <= capacity
}
