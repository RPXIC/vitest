/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
"(()) bici" // ❌
*/

export const isValid = (letter) => {
  if (typeof letter !== 'string') return false

  const openParenthesis = letter.indexOf('(')
  const closeParenthesis = letter.indexOf(')')

  if (openParenthesis === -1 || closeParenthesis === -1) return false // parenthesisnot found
  if (openParenthesis > closeParenthesis) return false // wrong order
  if (openParenthesis + 1 === closeParenthesis) return false // is empty

  const notValidBetweenParenthesis = ['[', '{', '(']

  for (var i = openParenthesis + 1; i < closeParenthesis; i++) {
    if (notValidBetweenParenthesis.includes(letter[i])) return false
  }

  return true
}
