import Posts from '../models/posts.js'
let posts = [ ]

export const viewInicio = async (req,res) => {
  res.status(200).render('inicio',{posts:posts}) 
}

export const viewUser= async (req,res)=>{
  
    res.status(200).render('usuario',{posteos:posts})
  }
  
export const createPost = async (req,res)=>{
  try {
    const post= new Post(req.body)
    await post.save()
    
  } 
  catch (e) { console.log(e) }
  res.status(200).redirect('/usuario')
}

export const delPost =(req,res) =>{
  console.log(req.body)
  posts = posts.filter(element => element.id != req.body.id)
  res.status(200).redirect('/usuario')
  
}

export const updatePost = (req,res) => {
  let post = posts.find(element => element.id == req.body.id)
  if(req.body.title) post.title = req.body.title
  if(req.body.desc) post.desc = req.body.desc
  res.status(200).redirect('/usuario')
}

export const createComentario = (req,res)=>{
  let post = posts.find(element => element.id == req.body.idProduct)
  console.log(post)
  post.comentarios.push(req.body.comment)
  console.log(posts)

}