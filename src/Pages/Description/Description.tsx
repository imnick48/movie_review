import { useEffect, useRef, useState } from "react";
import movie from '../../assets/images/movie.jpg';
import moviebig from '../../assets/images/moremoviestuffland.jpg';
import CommentSection from "../../components/Cmmentsection/Commentsection";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Description() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let name = queryParams.get('movie');
  let about;
  const handleback=()=>{
    navigate('/movies');
  }
  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const nagegetter=()=>{
    const linking=`http://127.0.0.1:8000/?name=${name}`
    useEffect(()=>{
      fetch(linking)
        .then(response=>response.json())
        .then(data=>{
          name=data[0].name
          about=data[0].about
        })
    })
  }
  nagegetter()
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-screen w-screen py-8">
      <div className="flex flex-col w-[90vw] max-w-[1000px] overflow-hidden flex justify-center items-center flex-col">
        <div className="h-[50vh] w-full flex flex-row rounded-[10px]">
          <div className="h-full p-2">
            <img src={movie} alt="Movie Thumbnail" className="h-full w-full object-cover rounded-[20px]" />
          </div>
          <div className="h-full p-2 flex-1">
            <img src={moviebig} alt="Big Movie Poster" className="h-full w-full rounded-[20px]" />
          </div>
        </div>
        <div className="h-fit w-fit flex">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Movie:</h1>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{name}</h1>
        </div>
        <div className="h-fit w-fit flex text-black">
          <button className="bg-white m-2 w-[20vw] h-[4vh] rounded-[10px] hover:bg-[#C0C0C0]" onClick={handleback}>Go back to Movies</button>
          <button className="bg-white m-2 w-[20vw] h-[4vh] rounded-[10px] hover:bg-[#C0C0C0]" onClick={scrollToSection}>Go to comment section</button>
        </div>
        <div className="mt-4 p-4 text-black w-full overflow-y-auto">
          <p className="text-white">{about}</p>
        </div>
      </div>
      <div ref={divRef} className="w-screen">
        <CommentSection name={name ?? ''}/>
      </div>
    </div>
  );
}
