export const sumPairs = (array, result) => {
  if (!array) throw new Error('array must be provided')
  if (!Array.isArray(array)) throw new Error('array must be provided')
  if (array.length < 2) throw new Error('array must be provided with atleast 2 values')
  array.forEach((el) => {
    if (typeof el !== 'number') throw new Error('elements of array must be numbers')
  })
  if (!result) throw new Error('result must be provided')
  if (typeof result !== 'number') throw new Error('result must be a number')

  let res

  function check(count) {
    if (count === array.length) return (res = null)

    for (var i = count + 1; i < array.length; i++) {
      if (array[count] + array[i] === result) return (res = [array[count], array[i]])
    }

    return check(count + 1)
  }

  check(0)
  return res
}
