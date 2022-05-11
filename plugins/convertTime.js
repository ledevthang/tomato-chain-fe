import moment from 'moment'

export default (context, inject) => {
  const convertTime = (timeStamp, format, callback = null) => {
    if (typeof callback === 'function') {
      callback(timeStamp)
    }

    return moment.unix(timeStamp).format(format)
  }

  // Inject $convertTime(item) in Vue, context, and store
  inject('convertTime', convertTime)
  context.$convertTime = convertTime
}
