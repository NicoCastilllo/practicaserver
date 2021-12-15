import Post from '../models/posts.js'

export const viewInicio = async (req,res) => {
  try {
    let post =  await Post.find({}).lean()
      res.status(200).render('inicio',{posts:post})
    } 
    catch (e) { console.log(e) }
}

export const viewPosts= async (req,res)=>{
  try {
  let post =  await Post.find({}).lean()
    res.status(200).render('posts',{posteos:post})
  } 
  catch (e) { console.log(e) }
   
  }
  
export const createPost = async (req,res)=>{
  try {
    
    const post= new Post(req.body)
    post.img = Math.floor(Math.random()*10000000) + ".jpg"
    await post.save()
    
    const EDFile = req.files.img

    EDFile.mv(`./public/img/${post.img}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })
    res.status(200).redirect('/posts')
    
  } 
  catch (e) { console.log(e) }
  
}

export const delPost = async (req,res) =>{
  try {
    const postfound = await Post.find({_id:req.body._id}).lean()
       if ((Object.entries(postfound).length === 0)) {
         return res.status(200).render("nofound",{message:"no se encontro el Producto"})
       }
       await Post.deleteOne({ _id: req.body._id }) 
       res.status(200).redirect('/posts')
} 
 catch (e) { console.log(e) }
 
  
}

export const updatePost = async (req,res) => {
 
  try {
    const postfound = await Post.find({_id:req.body._id}).lean()
        if ((Object.entries(postfound).length === 0)) {
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        }
    await Post.findOneAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      { new: true }
    )  
    if(req.files){
      const EDFile = req.files.img

    EDFile.mv(`./public/img/${req.body.img}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })
    }
    res.status(200).redirect('/posts')
  } 
  catch (e) { console.log(e) }
 
}

export const createComentario = async (req,res)=>{
  try {

    const postfound = await Post.find({_id:req.body.idPost}).lean()
        if ((Object.entries(postfound).length === 0)) {
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        }  

    let modificacion = {}
    modificacion.comments = postfound[0].comments
    modificacion.comments.push(req.body.comment)

    await Post.findOneAndUpdate(
      { _id: req.body.idPost},
      { $set: modificacion },
      { new: true }
    )  
    res.status(200).redirect('/inicio')
  } 
  catch (e) { console.log(e) }

}