import React, { useEffect, useState } from 'react'
import axios from "../axios";
import requests from '../requests';
import "../components/styles/Banner.css"

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect( () => {

        const fetchData = async () => {
            
            const request = await axios.get( requests.fetchNetflixOriginals );

            setMovie(
                // Random Movie
                request.data.results[
                    Math.floor( Math.random() * request.data.results.length -1 ) 
                ]
            );

            return request;
        }

        fetchData();

    }, []);

    // console.log( movie );

    function truncate( str, n ) {
        // Función para agregar los 3 dots por si el string sobrepasa el número n.
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >

            {/* title (container)*/}
            <div className="banner__contents">
                <h1 className="banner__title">
                    { movie?.title || movie?.name || movie?.original_name }
                </h1>

                {/* div > 2 buttons */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                {/* description */}
                <h1 className="banner__description">
                    { truncate( movie?.overview, 150 ) }
                </h1>

            </div>

            <div className="banner--fadeBottom"/>

        </header>
    )
}

export default Banner
