const formateDate = (data) => {
  let year = data.getFullYear()
  let month = data.getMonth() + 1
  let day = data.getDate()
  if(month < 10) {
    month = `0${month}`
  }

  if(day < 10) {
    day = `0${day}`
  }

  return `${year}年-${month}月-${day}日`
}

module.exports = {
  formateDate
}