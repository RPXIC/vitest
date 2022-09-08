export const wrapGifts = (gifts) => {
  if (!gifts) throw new Error('gifts parameter must be provided')
  if (!Array.isArray(gifts)) throw new Error('gifts must be an array')
  if (gifts.length === 0) throw new Error('gifts must have values')
  gifts.forEach((el) => {
    if (typeof el !== 'string') throw new Error('gifts must be an array of strings')
  })

  const rowLength = gifts[0].length + 2

  let firstAndLastRow = ''
  for (var i = 0; i < rowLength; i++) {
    firstAndLastRow += '*'
  }
  const eachGiftsWrapped = gifts.map((el) => `*${el}*`)
  const wrappedPackage = [firstAndLastRow, ...eachGiftsWrapped, firstAndLastRow]

  return wrappedPackage
}
