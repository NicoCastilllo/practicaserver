import Fav from '../models/favoritos.js'

export const viewFavs = async (req,res) => {
    try {
      let fav =  await Fav.find({}).lean()
        res.status(200).render('favoritos',{favoritos:fav})
      } 
      catch (e) { console.log(e) }
  }

  export const createFav = async (req,res)=>{
    try {
      const fav= new Fav(req.body)
      await fav.save()
      res.status(200).redirect('/favoritos')
      
    } 
    catch (e) { console.log(e) }
    
  }
  
  export const delFav = async (req,res)=>{
    try {
      const favfound = await Fav.find({_id:req.body._id}).lean()
         if ((Object.entries(favfound).length === 0)) {
           return res.status(200).render("nofound",{message:"no se encontro el Producto"})
         }
         await Fav.deleteOne({ _id: req.body._id }) 
         res.status(200).redirect('/favoritos')
  } 
   catch (e) { console.log(e) }
   
  }