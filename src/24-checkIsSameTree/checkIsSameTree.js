const isObject = (object) => object != null && typeof object === 'object'

export const checkIsSameTree = (treeA, treeB) => {
  if (!treeA) throw new Error('treeA parameter must be provided')
  if (!treeB) throw new Error('treeB parameter must be provided')
  if (typeof treeA !== 'object' || Array.isArray(treeA) || treeA === null) throw new Error('treeA parameter must be an object')
  if (typeof treeB !== 'object' || Array.isArray(treeB) || treeB === null) throw new Error('treeB parameter must be an object')

  const keys1 = Object.keys(treeA)
  const keys2 = Object.keys(treeB)
  if (keys1.length !== keys2.length) return false

  for (const key of keys1) {
    const val1 = treeA[key]
    const val2 = treeB[key]
    const areObjects = isObject(val1) && isObject(val2)
    if ((areObjects && !checkIsSameTree(val1, val2)) || (!areObjects && val1 !== val2)) return false
  }
  return true
}
