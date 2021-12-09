import mongoose from 'mongoose'

const postsCollection = 'posts'
const postsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  desc: { type: String, require: true },
})
export default mongoose.model(postsCollection, postsSchema)