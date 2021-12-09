import Post from '../models/posts.js'

export const viewInicio = async (req,res) => {
  try {
    let post =  await Post.find({}).lean()
      res.status(200).render('inicio',{posts:post})
    } 
    catch (e) { console.log(e) }
}

export const viewUser= async (req,res)=>{
  try {
  let post =  await Post.find({}).lean()
    res.status(200).render('usuario',{posteos:post})
  } 
  catch (e) { console.log(e) }
   
  }
  
export const createPost = async (req,res)=>{
  try {
    const post= new Post(req.body)
    await post.save()
    res.status(200).redirect('/usuario')
    
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
       res.status(200).redirect('/usuario')
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
    res.status(200).redirect('/usuario')
  } 
  catch (e) { console.log(e) }
 
}

export const createComentario = async (req,res)=>{
  try {

    const postfound = await Post.find({_id:req.body.idProduct}).lean()
        if ((Object.entries(postfound).length === 0)) {
          return res.status(200).render("nofound",{message:"no se encontro el Producto"})
        }  

    let modificacion = {}
    modificacion.comentario = postfound[0].comentario
    modificacion.comentario.push(req.body.comment)

    await Post.findOneAndUpdate(
      { _id: req.body.idProduct },
      { $set: modificacion },
      { new: true }
    )  
    res.status(200).redirect('/usuario')
  } 
  catch (e) { console.log(e) }

}