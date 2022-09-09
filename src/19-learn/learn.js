export const learn = (time, courses) => {
  if (!time) throw new Error('time parameter must be provided')
  if (typeof time !== 'number') throw new Error('time parameter must be a number')
  if (!courses) throw new Error('courses parameter must be provided')
  if (!Array.isArray(courses)) throw new Error('courses parameter must be an array')
  if (courses.length < 2) throw new Error('courses parameter must have atleast 2 values')
  courses.forEach((el) => {
    if (typeof el !== 'number') throw new Error('courses values must be a numbers')
  })

  let provisionalCourses = null
  let prevRemainingHours = time

  const checkFrom = (idx) => {
    for (var i = idx; i < courses.length; i++) {
      for (var x = idx + 1; x < courses.length; x++) {
        const selectedCourses = courses[i] + courses[x]

        if (selectedCourses === time) return (provisionalCourses = [i, x])

        const remainingHours = time - selectedCourses >= 0 && time - selectedCourses

        if (remainingHours && remainingHours < prevRemainingHours) {
          provisionalCourses = [i, x]
          prevRemainingHours = remainingHours
        }
      }
      return checkFrom(idx + 1)
    }
  }
  checkFrom(0)

  return provisionalCourses
}
