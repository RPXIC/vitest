export const missingReinder = (ids) => {
  if (!ids) throw new Error('ids parameter must be provided')
  if (!Array.isArray(ids)) throw new Error('ids parameter must be an array')
  if (ids.length === 0) throw new Error('ids parameter must have values')
  ids.forEach((el) => {
    if (typeof el !== 'number') throw new Error('ids must be an array of numbers')
  })

  for (var i = 0; i < ids.length; i++) {
    if (!ids.includes(i)) return i
    if (i === ids.length - 1) return i + 1
  }
}
