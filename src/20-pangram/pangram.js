export const pangram = (letter) => {
  if (!letter) throw new Error('parameter letter must be provided')
  if (typeof letter !== 'string') throw new Error('parameter letter must be a string')

  var regex = /([a-z]ñ)\w/gi
  return regex.test(letter)
}
