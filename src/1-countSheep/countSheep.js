export const countSheep = (sheepsArr) => {
  if (!sheepsArr) throw new Error('Parameter sheepsArray of sheeps is required')
  if (!Array.isArray(sheepsArr)) throw new Error('Parameter sheepsArray must be an array')
  if (sheepsArr.length === 0) throw new Error('Array of sheeps is empty')

  const filteredSheeps = sheepsArr.filter((sheep) => {
    return sheep.color === 'red' && sheep.name.toLowerCase().includes('n') && sheep.name.toLowerCase().includes('a')
  })
  return filteredSheeps
}
