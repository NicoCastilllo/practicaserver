export const buyer =(req,res,next)=>{
    if(req.body.username == "nico@asd.com" && req.body.password == "123") {
       next()  
    } else {
        res.status(200).render('fallaingreso')
}}