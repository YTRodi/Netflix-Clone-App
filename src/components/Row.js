import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from "../axios";
import "./styles/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ( { title, fetchUrl, isLargeRow } ) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    // if [], run once when the row loads, and don't run again
    useEffect( () => {

        // Helper
        const fetchData = async () => {

            const request = await axios.get( fetchUrl );
            // console.log(request);
            setMovies( request.data.results );

            return request;
            
        };
        fetchData();

    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        }

    }

    const handleClick = ( movie ) => {

        if ( trailerUrl ) {
            setTrailerUrl( "" );
        } else {
            movieTrailer( movie?.name || "" )
                .then( ( url ) => {
                    // https://www.youtube.com/watch?v=-cMqr9HpZ-Y&list=LL&index=1&t=5761s

                    // Nos pasaría lo que hay después del 'watch?'
                    const urlParams = new URLSearchParams( new URL( url ).search );
                    setTrailerUrl( urlParams.get("v") );

                })
                .catch( ( err ) => console.log( err ) );
            }
            
    }

    
    // container -> posters
    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row__posters">
                { movies.map( movie => (
                    
                    <img
                        key={ movie.id }
                        onClick={ () => handleClick( movie ) }
                        className={`row__poster ${isLargeRow  && "row__posterLarge"}`}
                        src={ `${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path  }`}
                        alt={ movie.name }
                    />

                ))}
            </div>

            {/* Cuando tenga el url del trailer voy a poder mostrar el video. */}
            { trailerUrl &&  <YouTube videoId={ trailerUrl } opts={ opts } /> }
           
        </div>
    )
}

export default Row;
