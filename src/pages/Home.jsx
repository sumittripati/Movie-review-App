import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 text-black">
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-sm uppercase tracking-widest mb-2">Explore the latest in movie industries</h2>
              <h1 className="text-5xl font-bold mb-4">Unlimited Movie, TVs Shows, & More.</h1>
              <p className="text-lg mb-6">Discover the Top Best Movies and Dramas with a catchy subtitle like Your Ultimate Guide to Must-Watch Content.</p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300">
                <NavLink to="/movies">
                   Explore Now
                </NavLink>
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img src="https://w0.peakpx.com/wallpaper/410/40/HD-wallpaper-titanic-movie-full-titanic-movies-love.jpg" alt="Collage of movie posters" className="w-full max-w-md"/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home
