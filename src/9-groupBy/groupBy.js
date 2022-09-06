export const groupBy = (collection, it) => {
  if (!collection) throw new Error('collection param must be provided')
  if (!Array.isArray(collection)) throw new Error('collection must be an array')

  if (!it) throw new Error('it param must be provided')

  const res = {}
  const accessor = (x) => (typeof it === 'function' ? it(x) : x[it])

  collection.forEach((el) => {
    res[accessor(el)] ? (res[accessor(el)] = res[accessor(el)].concat([el])) : (res[accessor(el)] = [el])
  })

  return res
}
