import { xmasDate, oneDayInMs } from './constants.js'

export const daysToXmas = (date) => {
  if (!date) throw new Error('parameter must be  provided')
  if (!(date instanceof Date)) throw new Error('parameter must be instance of date')

  return Math.ceil((xmasDate - date) / oneDayInMs)
}
