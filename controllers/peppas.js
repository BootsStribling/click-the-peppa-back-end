import { Peppa } from '../models/peppa.js'

const index = (req, res) => {
  Peppa.find({})
  .then(peppas => res.status(200).json(peppas))
  .catch(error => {
    console.log(error)
    res.status(500).json(err)
  })
}


//**** THIS WAS USED FOR INITIAL CREATION- YOU WILL HAVE TO RE-EXPORT CREATE IF YOU WISH TO CREATE A NEW PEPPA */
// const create = (req,res) => {
//   Peppa.create({count: 0})
//   .then(peppa => res.status(201).json(peppa))
//   .catch( err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
// }

export {
  index,
}