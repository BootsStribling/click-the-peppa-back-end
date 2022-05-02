import mongoose from 'mongoose'

const Schema = mongoose.Schema

const peppaSchema = new Schema({
  count: Number
}, { timestamps: true })

const Peppa = mongoose.model('Peppas', peppaSchema)

export {
  Peppa
}