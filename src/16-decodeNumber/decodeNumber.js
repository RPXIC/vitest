export const decodeNumber = (symbols) => {
  if (!symbols) throw new Error('symbols parameter must be provided')
  if (typeof symbols !== 'string') throw new Error('symbols parameter must be an string')

  const doc = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  }

  let total = 0

  for (var i = 0; i < symbols.length; i++) {
    const currentSymVal = doc[symbols[i]]
    const nextSymVal = doc[symbols[i + 1]]

    total += currentSymVal < nextSymVal ? -currentSymVal : currentSymVal
  }

  return total
}
