export const fixFiles = (files) => {
  if (!files) throw new Error('parameter files must be provided')
  if (!Array.isArray(files)) throw new Error('parameter files must be an array')
  if (files.length === 0) throw new Error('parameter files is empty')
  files.forEach((el) => {
    if (typeof el !== 'string') throw new Error('each parameter of files must be a string')
  })

  const result = []
  let counter = {}

  files.forEach((el) => {
    counter[el] === undefined ? (counter[el] = 0) : counter[el]++
    !result.includes(el) ? result.push(el) : result.push(`${el}(${counter[el]})`)
  })

  return result
}
