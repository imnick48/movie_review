import { useState, useEffect } from "react";
import Homepagecard from '../../components/Homepagecard/Homepagecard';
import Rblog from "../../components/rblog/rblog"
import './Homepage.css';

interface Movie {
  id: number;
  name: string;
}

const Homepage: React.FC = () => {
  const [movieNames, setMovieNames] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000')
      .then(response => response.json())
      .then(data => {
        const names = data.map((movie: Movie) => movie.name);
        setMovieNames(names);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen bg-black overflow-y-scroll">
      <Homepagecard />
      <h1 className="text-white text-2xl mt-4 p-2 rounded border-b-2 white mb-2">MOST POPULAR</h1>
      <Rblog movies={movieNames} />

      <h1 className="text-white text-2xl mt-4 p-2 rounded border-b-2 white mb-2">MOST AWAITED</h1>
      <Rblog movies={movieNames} />
    </div>
  );
}

export default Homepage;
