export const viewlogin = (req, res) => {
    res.status(200).render('login')
  }
  
export const login = async (req,res) => {
    res.status(200).redirect('/inicio')
}