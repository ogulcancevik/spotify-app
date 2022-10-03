import dayjs from 'dayjs'
export const msToMin = (duration) => {
  const min = Math.floor(duration / 60000)
  const sec = ((duration % 60000) / 1000).toFixed(0)
  return `${min}:${sec < 10 ? '0' : ''}${sec}`
}

export const formatDate = (date) => {
  return dayjs(date).format('DD MMM YYYY')
}
