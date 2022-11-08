module.exports = {
  getIndex: (req, res) => {
    res.render('index.ejs')
  },
  getGear: (req, res) => {
    res.render('gear', {
      // Use es6 optional chaining for sending the userName. This data helps determine which navbar the user sees when visiting the page (logged in navbar vs logged out navbar).
      userName: req.user?.userName,
    })
  },
  getVideos: (req, res) => {
    res.render('videos', {
      // Use es6 optional chaining for sending the userName. This data helps determine which navbar the user sees when visiting the page (logged in navbar vs logged out navbar).
      userName: req.user?.userName,
    })
  },
}
