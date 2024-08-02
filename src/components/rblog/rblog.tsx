import React from "react";
import './rblog.css';
import Card from "../Card/Card";
interface RblogProps {
  movies: string[];
}
const Rblog: React.FC<RblogProps> = ({ movies }) => {
  const displayedMovies = movies.length > 5 ? movies.slice(0, 5) : movies;

  return (
    <div className="rblog">
      {displayedMovies.map((movie, index) => (
        <Card key={index} name={movie} />
      ))}
    </div>
  );
}

export default Rblog;

