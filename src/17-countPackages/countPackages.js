export const countPackages = (carriers, carrierID) => {
  if (!carriers) throw new Error('carriers parameter must be provided')
  if (!Array.isArray(carriers)) throw new Error('carriers parameter must be an array')
  if (carriers[0].length < 3) throw new Error('carriers parameter must have value')
  if (typeof carriers[0][0] !== 'string') throw new Error('first value of carrier must be a string')
  if (typeof carriers[0][1] !== 'number') throw new Error('second value of carrier must be a number')
  if (!Array.isArray(carriers[0][2])) throw new Error('third value of carrier must be an array')
  carriers[0][2].forEach((n) => {
    if (typeof n !== 'string') throw new Error('third value of carrier must be an array of strings')
  })

  if (!carrierID) throw new Error('carrierID parameter must be provided')
  if (typeof carrierID !== 'string') throw new Error('carrierID parameter must be a string')

  const carrierMatch = carriers.find((carrier) => carrier[0] === carrierID)
  const [, packages, team] = carrierMatch
  let totalPackages = packages

  const getPackagesTeam = (_team) => {
    _team.forEach((carrierTeam) => {
      const [, packages, subTeam] = carriers.find((el) => el[0] === carrierTeam)
      totalPackages += packages
      if (subTeam.length > 0) return getPackagesTeam(subTeam)
    })
  }
  getPackagesTeam(team)

  return totalPackages
}
