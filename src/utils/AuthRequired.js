export default (to, from, next) => {
  if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
    // verify with api
    next()
  } else {
    localStorage.removeItem('user')
    next('/user/login')
  }
}
