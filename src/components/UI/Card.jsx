import { NavLink } from "react-router-dom";

const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img 
        src={Poster} 
        alt={imdbID} 
        className="w-full h-auto object-cover max-h-[400px]"  // Object-cover for image aspect ratio
      />
      <div className="bg-gray-800 text-white text-center py-2">
        <NavLink to={`/movies/${imdbID}`}>
          <button className="uppercase tracking-wide font-semibold hover:bg-blue-600 hover:text-yellow-200 transition duration-300">Watch Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
