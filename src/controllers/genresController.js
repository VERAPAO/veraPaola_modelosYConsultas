const db = require("../database/models")

module.exports = {
  list:(req,res) => {
    db.Genre.findAll()
    .then((genres) => {

      res.render("genresList",{
        genres
      })

    })
    .catch((err) => {
      res.send(err.message)
    }) 
    
  },

  detail: (req,res) => {

    const {id} = req.params
    db.Genre.findByPk(id)
    .then((genre) => {
      res.render("genresDetail", {
        genre
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  }
}