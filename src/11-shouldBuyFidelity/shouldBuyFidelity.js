export const shouldBuyFidelity = (times) => {
  if (typeof times !== 'number') throw new Error('times param must be a number')

  const ticket = 12
  const totalWithoutFidelity = times * ticket
  const fidelityCard = 250
  let discountAccTicket = ticket
  let totalWithFidelity = fidelityCard

  for (var i = 0; i < times; i++) {
    discountAccTicket *= 0.75
    totalWithFidelity += discountAccTicket
  }

  return totalWithFidelity < totalWithoutFidelity
}
