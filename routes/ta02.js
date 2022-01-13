//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let userList = [];
let displayError = false

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: userList, 
    error: displayError
  });
});

router.post('/addUser', (req, res, next) => {
  userList.push({name: req.body.username});
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  let username = req.body.removeName;
  let found = false;
  for (let user of userList) {
    if (user.name == username) {
      found = true
    }
  }

  if (found) {
    displayError = false;
    userList = userList.filter((user) => user.name != req.body.removeName)
    res.redirect('/ta02');
  } else {
    displayError = true;
    res.redirect('/ta02');
  }
});

module.exports = router;
