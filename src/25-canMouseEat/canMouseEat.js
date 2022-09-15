export const canMouseEat = (direction, game) => {
  if (!direction) throw new Error('direction parameter must be provided')
  if (typeof direction !== 'string') throw new Error('direction parameter must be a string')
  if (direction !== 'up' && direction !== 'down' && direction !== 'left' && direction !== 'right') throw new Error('direction parameter must be a direction')
  if (!game) throw new Error('game parameter must be provided')
  if (!Array.isArray(game)) throw new Error('game parameter must be an array')
  if (game.length === 0) throw new Error('game parameter must have values')
  game.forEach((el) => {
    if (!Array.isArray(el)) throw new Error('game values must be an array')
    if (el.length === 0) throw new Error('game values must have values')
    el.forEach((subEl) => {
      if (typeof subEl !== 'string') throw new Error('values of game values must be a string')
    })
  })

  const mouse = 'm'
  const food = '*'
  const positions = {}

  game.forEach((el, x) => {
    el.forEach((subEl, y) => {
      if (subEl === mouse) positions['mouse'] = [x, y]
      if (subEl === food) {
        if (positions['food']) {
          positions['food'] = [...positions['food'], [x, y]]
        } else {
          positions['food'] = [[x, y]]
        }
      }
    })
  })

  const mousePosition = positions['mouse']
  const foodPositions = positions['food']
  const [x, y] = mousePosition
  let newMousePosition

  switch (direction) {
    case 'up':
      if (x === 0) return false
      newMousePosition = [x - 1, y]
      break
    case 'down':
      if (x === game[0].length) return false
      newMousePosition = [x + 1, y]
      break
    case 'left':
      if (y === 0) return false
      newMousePosition = [x, y - 1]
      break
    case 'right':
      if (y === game[x].length) return false
      newMousePosition = [x, y + 1]
      break
    default:
      console.log('WTF')
  }

  let mouseCanEat = false

  foodPositions?.forEach((el) => {
    if (el.join('') === newMousePosition.join('')) return (mouseCanEat = true)
  })

  return mouseCanEat
}
