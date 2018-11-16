export const getTimeInterval = (startTime) => {
  const m = 60 * 1000
  const h = m * 60
  const d = h * 24

  const interval = +new Date() - startTime
  if (interval - d > 0) {
    return Math.floor(interval / d) + '天前'
  } else if (interval - h > 0) {
    return Math.floor(interval / h) + '小时前'
  } else if (interval - m > 0) {
    return Math.floor(interval / m) + '分钟前'
  } else {
    return '刚刚'
  }
}

export const sum = () => {}