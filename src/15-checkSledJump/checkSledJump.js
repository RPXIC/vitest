export const checkSledJump = (heights) => {
  if (!heights) throw new Error('heights parameter must be provided')
  if (!Array.isArray(heights)) throw new Error('heights parameter must be an array')
  if (heights.length < 3) throw new Error('heights parameter must have atleast 3 values')
  heights.forEach((el) => {
    if (typeof el !== 'number') throw new Error('heights must be an array of numbers')
  })

  let isAscending = true
  let isDescending = false
  let prevNum = heights[0]

  for (var i = 1; i < heights.length; i++) {
    if (prevNum < heights[i] && !isDescending) {
      isAscending = true
    } else if (prevNum > heights[i]) {
      isAscending = false
      isDescending = true
    } else if (prevNum === heights[i]) {
      return false
    } else return false
    prevNum = heights[i]
  }

  return isDescending
}
