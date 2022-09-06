export const contains = (store, product) => {
  if (!store) throw new Error('store param must be provided')
  if (typeof store !== 'object' || Array.isArray(store) || store === null) throw new Error('store must be an object')

  if (!product) throw new Error('product param must be provided')
  if (typeof product !== 'string') throw new Error('param product must be a string')

  let found = false
  Object.keys(store).forEach((el) => {
    if (typeof store[el] === 'object') {
      found = contains(store[el], product)
    } else {
      Object.values(store).includes(product) ? (found = true) : (found = false)
    }
  })
  return found
}
