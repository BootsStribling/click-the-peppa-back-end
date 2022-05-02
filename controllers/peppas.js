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

const update = (req,res) => {
  Peppa.findById({_id:'626ff7de637f2b47b9c85061'})
  .then(peppa => {
    console.log(peppa, 'before ++');
    peppa['count'] += 1
    peppa.save()
    .then(peppa => res.status(202).json(peppa))
    .catch(err => res.status(500).json(err))
  })
  .catch(err => res.status(500).json(err))
}

export {
  index,
  //create,
  update,
}