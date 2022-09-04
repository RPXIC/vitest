export const listGifts = (letter) => {
  if (typeof letter !== 'string') throw new Error('letter must be a string')

  const arr = letter.split(' ')
  const filteredArr = arr.filter((el) => el[0] !== '_' && el.trim())
  const letterResult = {}
  filteredArr.forEach((el) => {
    letterResult[el] ? letterResult[el]++ : (letterResult[el] = 1)
  })
  return letterResult
}
