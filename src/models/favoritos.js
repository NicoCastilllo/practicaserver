import mongoose from 'mongoose'

const favoritosCollection = 'favoritos'
const favoritosSchema = new mongoose.Schema({
  title: { type: String, require: true },
  desc: { type: String, require: true },
  comments:{type:Array ,require:true}
})

export default mongoose.model(favoritosCollection,favoritosSchema)