export let fetchData = async()=>{
  try {
      // let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=eb3b011f")
      // let res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=eb3b011f&s=titanic&page=1")
      let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
      // console.log(res)
       let data = res.json()
       return data
        // console.log(data)
    } catch (error) {
   console.log(error)
 }
}
