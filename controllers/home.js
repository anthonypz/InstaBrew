module.exports = {
  getIndex: (req, res) => {
    res.render('index.ejs')
  },
  getGear: (req, res) => {
    res.render('gear', {
      // use es6 optional chaining for the userName
      userName: req.user?.userName,
    })
  },
  getVideos: (req, res) => {
    res.render('videos', {
      // use es6 optional chaining for the userName
      userName: req.user?.userName,
    })
  },
}
