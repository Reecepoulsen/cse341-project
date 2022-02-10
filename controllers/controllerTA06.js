exports.getIndex = (req, res, next) => {
  res.render('pages/ta06', {
    title: "Team Activity 06",
    path: '/ta06'
  })
}

exports.getRegister = (req, res, next) => {
  res.render('pages/register', {
    title: "Create Account",
    path: '/ta06/register'
  })
}

exports.getLogin = (req, res, next) => {
  res.render('pages/register', {
    title: "Login",
    path: '/ta06/login'
  })
}

exports.postRegister = (req, res, next) => {
  
}

exports.postLogin = (req, res, next) => {
  
}