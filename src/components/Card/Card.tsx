import React from "react";
import movie from '../../assets/images/movie.jpg';
import './Card.css';
import { useNavigate } from "react-router";

export default function Card({ name }: { name: string }) {
    const navigate = useNavigate();

    const clicking = (nameofthemovie: string) => {
        let movie_navigate = `/movie_name/?movie=${nameofthemovie}`;
        navigate(movie_navigate);
    };

    const getFontSize = (text: string): string => {
        const baseFontSize = 1.0;
        const maxLength = 40;
        const scale = Math.max(0.8, (maxLength - text.length) / maxLength);
        return `${baseFontSize * scale}rem`;
    };

    const fontSize = getFontSize(name);
    return (
        <div
            className="card bg-red-500 w-[30vw] max-w-[192px] rounded-[10px] p-[1vw] flex flex-col m-2"
            onClick={() => clicking(name)}>
            <img src={movie} alt="Movie" className="w-full flex-grow rounded-[10px]" />
            <h2 className="card-title self-center mt-[0.1vw]"style={{ fontSize }}>{name}</h2>

        </div>
    );
}
