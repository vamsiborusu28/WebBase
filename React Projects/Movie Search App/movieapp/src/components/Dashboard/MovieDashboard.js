
import {useSelector} from 'react-redux';
import React from 'react';
import filmSlice from '../../Redux/features/filmSlice';
import MovieCard from './MovieCard';
import './moviedashboard.css';
function MovieDashboard(){
    const filmList=useSelector((state) => state.film.filmList);
    
    return(
        <>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-white py-[1%] px-[2%] md:mx-[5%] md:items-center md:justify-center mx-[25%]   gap-[20px] dashboard">
        
        {
                filmList.map((element) => {
                    return (<>
                    <MovieCard filmData={element}></MovieCard>
                    </>)
                })
        }
         
        
        </section>
        </>
    )
}

export default MovieDashboard;