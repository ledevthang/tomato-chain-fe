export default (context, inject) => {
  const showSuccessDialog = (object, callback = null) => {
    if (typeof callback === 'function') {
      callback(object)
    }

    context.store.dispatch('handleMessageDialog/showSuccessDialog', object)
  }

  // Inject $showSuccessDialog(item) in Vue, context, and store
  inject('showSuccessDialog', showSuccessDialog)
  context.$showSuccessDialog = showSuccessDialog
}
