export const getTimeToString = (timeInSeconds: number) => {
  const localtime = new Date(timeInSeconds)
  localtime.setUTCHours(localtime.getUTCHours() - 7)
  return localtime.toLocaleString()
}

export const getSvgFromLineItem = (lineItem: string) => {

  const split = lineItem.split(' ')
  // console.log('splite the lineItem, ', split)



  return split[0]
}