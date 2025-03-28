export const getTimeToString = (timeInSeconds: number) => {
  const localtime = new Date(timeInSeconds).toLocaleString()
  return localtime
}