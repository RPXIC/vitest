export const canReconfigure = (from, to) => {
  if (!from) throw new Error('parameter from must be provided')
  if (typeof from !== 'string') throw new Error('parameter from must be a string')
  if (!to) throw new Error('parameter to must be provided')
  if (typeof to !== 'string') throw new Error('parameter to must be a string')

  if (from.length !== to.length) return false
  if (new Set(from).size !== new Set(to).size) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformations[fromLetter]

    if (storedLetter && storedLetter !== toLetter) return false
    transformations[fromLetter] = toLetter
  }

  return true
}
