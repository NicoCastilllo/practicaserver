import mongoose from 'mongoose'

const postsCollection = 'posts'
const postsSchema = new mongoose.Schema({
  img: {type: String, require: true},
  title: { type: String, require: true },
  desc: { type: String, require: true },
  comments:{type: Array ,require: true }
})

export default mongoose.model(postsCollection, postsSchema)