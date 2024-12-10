import { NavLink, useLoaderData } from "react-router-dom"
export let MovieDetails = () => {

    let moviesData = useLoaderData()
    console.log(moviesData)

    let {Poster, Title,  Year, Awards, Actors, Plot, Language} = moviesData

  return (
    <>
      {/* <div> 
        <img src={Poster} alt={Title} />
        <p>{Title}</p>
        <h3>{Awards}</h3>
        <h1>{Actors}</h1>
        <p>{Plot}</p>
        <p>{Language}</p>
        <h2>{Year}</h2>
      </div> */}


      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row max-w-4xl">
  <img 
    src={Poster} 
    alt={Title} 
    className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" 
  />
  <div className="md:ml-6 flex-1">
    <h1 className="text-2xl font-bold text-blue-600">{Title}</h1>
    <div className="flex items-center space-x-2 mt-2">
      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded">
        #MOVIE
      </span>
      <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2.5 py-0.5 rounded">
        YEAR: {Year}
      </span>
    </div>
    <p className="mt-4 text-gray-700">
      {Plot}
    </p>
    <p className="mt-4 text-gray-700">
      Awards: {Awards}
    </p>
    <div className="mt-4 flex items-center space-x-4 text-gray-700">
      <span>Actors: {Actors}</span>
      <span>Language: {Language}</span>
    </div>
    <button className="mt-6 bg-pink-200 text-pink-600 font-semibold py-2 px-4 rounded-full hover:bg-pink-300 transition duration-300 mr-2">
     <NavLink to="/movies">GO BACK</NavLink>
    </button>
    <button className="mt-6 bg-pink-200 text-pink-600 font-semibold py-2 px-4 rounded-full hover:bg-pink-300 transition duration-300">
     <NavLink to="/contact">Your Feedback</NavLink>
    </button>
  </div>
</div>

    </>
  )
}






               