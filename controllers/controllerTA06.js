exports.getIndex = (req, res, next) => {
  res.render('pages/ta06', {
    title: "Team Activity 06",
    path: '/ta06'
  })
}