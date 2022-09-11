export const countDecorations = (bigTree) => {
  if (!bigTree) throw new Error('bigTree parameter must be provided')
  if (typeof bigTree !== 'object' || Array.isArray(bigTree) || bigTree === null) throw new Error('bigTree parameter must be an object')

  const { left, right, value } = bigTree
  const t = { left: null, right: null, value: 0 }
  let count = value

  const getValues = (left = t, right = t) => {
    const { left: leftA = null, right: rightA = null, value: valueA = 0 } = left || {}
    const { left: leftB = null, right: rightB = null, value: valueB = 0 } = right || {}

    count += valueA + valueB

    if (!leftA && !leftB && !rightA && !rightB) return count

    return getValues(leftA, rightA), getValues(leftB, rightB)
  }

  getValues(left, right)

  return count
}
