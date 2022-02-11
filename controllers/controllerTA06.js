const fs = require('fs');
const { validationResult } = require("express-validator");


exports.getIndex = (req, res, next) => {
  res.render('pages/ta06', {
    title: "Team Activity 06",
    path: '/ta06',
    loggedIn: req.session.loggedIn
  })
}

exports.getRegister = (req, res, next) => {
  res.render('pages/register', {
    title: "Create Account",
    path: '/ta06/register',
    errorMessage: null
  })
}

exports.getLogin = (req, res, next) => {
  res.render('pages/login', {
    title: "Login",
    path: '/ta06/login',
    errorMessage: null
  })
}

exports.postRegister = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('pages/register', {
      title: "Create Account",
      path: '/ta06/register',
      errorMessage: errors.array()[0].msg
    })
  }

  if (password !== confirmPassword) {
    return res.redirect("/ta06/register");
  }

  const user = {
    email: email,
    password: password,
  };

  fs.writeFile('users.json', JSON.stringify(user), err => {
    if (err) {
      console.error(err);
      return res.redirect("/ta06/register").status(403);
    }
  })
  return res.redirect('/ta06/login');
}

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(403).render('pages/ta06', {
      title: "Login",
      path: "/ta06/login",
      errorMessage: errors.array()[0].msg
    })
  }

  fs.readFile('users.json', (err, data) => {
    if (err) {
      console.log(err);
      return res.redirect("/ta06/login").status(403);
    }
    user = JSON.parse(data);

    if (user.email.toString() === email.toString() && user.password.toString() === password.toString()) {
      req.session.loggedIn = true;
      return res.render('pages/ta06', {
        title: 'Team Activity 06',
        path: '/ta06',
        loggedIn: req.session.loggedIn
      })
    } 

    return res.status(403).render("pages/login", {
      title: "Login",
      path: "ta06/login",
      errorMessage: null
    })
  })
}

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("logout error", err);
    }
    res.redirect("/ta06");
  });
}