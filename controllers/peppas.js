import { Peppa } from '../models/peppa.js'

const index = (req, res) => {
  Peppa.find({})
  .then(peppas => res.json(peppas))
  .catch(error => {
    console.log(error)
    res.status(500).json(err)
  })
}

export {
  index
}