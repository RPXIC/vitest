export const createXmasTree = (n) => {
  if (!n) throw new Error('parameter number must be provided')
  if (typeof n !== 'number') throw new Error('parameter must be a number')

  let tree = ''
  let treeTrunkLength = 2
  let rowLengthLeft = n - 1
  let rowLengthRight = n - 1
  let count = 0

  // tree
  for (var x = 0; x < n; x++) {
    for (var y = rowLengthLeft; y > 0; y--) {
      tree += count >= y ? '*' : '_'
    }
    tree += '*'
    for (var z = 1; z <= rowLengthRight; z++) {
      tree += count >= z ? '*' : '_'
    }
    count++
    tree += '\n'
  }

  // trunk
  for (var x = 0; x < treeTrunkLength; x++) {
    for (var y = rowLengthLeft; y > 0; y--) {
      tree += '_'
    }
    tree += '#'
    for (var z = 1; z <= rowLengthRight; z++) {
      tree += '_'
    }
    if (x < treeTrunkLength - 1) tree += '\n'
  }

  return tree
}
