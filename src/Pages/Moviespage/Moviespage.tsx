import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

interface Movie {
  id: number;
  name: string;
}

export default function Moviespage() {
  const [movies, setMovies] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000')
      .then(response => response.json())
      .then(data => {
        const names = data.map((movie: Movie) => movie.name);
        setMovies(names);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="bg-black min-h-screen w-full p-4">
      <div className="flex flex-wrap justify-flex-start gap-4">
        {movies.map((movie, index) => (
          <Card key={index} name={movie} />
        ))}
      </div>
    </div>
  );
}