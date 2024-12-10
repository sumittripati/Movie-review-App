export const getmovieDetails = async({params})=>{
    console.log(params)
    let ID = params.movieID
    try {
        
        let res = await fetch(`https://www.omdbapi.com/?i=${ID}&apikey=${import.meta.env.VITE_API_KEY}`)
         let data = res.json()
         return data
      } catch (error) {
     console.log(error)
   }
  }





