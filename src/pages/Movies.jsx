import { useLoaderData } from "react-router-dom";
import Card from "../components/UI/Card";

const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {moviesData.Search.map((curMovie) => (
          <Card key={curMovie.imdbID} curMovie={curMovie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

