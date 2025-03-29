export const getTimeToString = (timeInSeconds: number) => {
  const localtime = new Date(timeInSeconds)
  localtime.setUTCHours(localtime.getUTCHours() - 7)
  return localtime.toLocaleString()
}