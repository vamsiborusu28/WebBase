import React, { useState } from 'react';

import './details.css';
import './MovieInfo/Ratings';
function Details(props){
   
    // console.log(typeof props.data.Ratings)

    if(typeof props.data.Ratings === 'undefined'){
        return;
    }
    const movieData=props.data;
    let Actors=movieData.Actors;
    Actors+='';
    
  
    
    return(
    <>
    <main className='flex flex-row flex-wrap justify-center md:justify-around items-center gap-[5vw] border-2 border-solid border-slate-900 mx-[5%] my-[2%] p-[3%] rounded-lg'>
        <section className='flex flex-col gap-[20px]'>
            <img src={movieData.Poster} className="h-[60vh] w-[50vw] bg-slate-900 rounded-lg "></img>
            <div className=' flex flex-col justify-center items-center text-green-300'>
                <h3>Title: <span>{movieData.Title}</span> </h3>
                <h3>Year: <span>{movieData.Year}</span></h3>
                <h3>Director: <span>{movieData.Director}</span></h3>
                <h3>Genre: <span>{movieData.Genre}</span></h3>
                <h3>Rated: <span>{movieData.rated}</span></h3>
                <h3>Released: <span>{movieData.Released}</span></h3>
                <h3>Runtime: <span>{movieData.Runtime}</span></h3>
                <h3>BoxOffice: <span>{movieData.BoxOffice}</span></h3>
            </div>
        </section>
        <section className='grid grid-cols-2 gap-x-[30px] gap-y-[15px]'>

            <div name='Actors'>
                <h3>Actors</h3>
                {
                    Actors.split(',').map((ele) => {
                        return <p className='text-red-600' key={ele}>{ele}</p>
                    })
                }
            </div>
            
            <div name='languages'>
                <h3>Languages</h3>
                {
                    (movieData.Language+'').split(',').map((ele) => {
                    return <p className='text-red-600' key={ele}>{ele}</p>
                    }
                    )
                }
            </div>
            <div>
                <h3>Ratings</h3>
                {
                    movieData.Ratings.map((ele) =>{
                        return(
                            <>
                            <h3>{ele.Source} :  <span>{ele.Value}</span></h3>
                            
                            </>
                        )
                    })
                }
            </div>
            <div>
                <h3>Awards</h3>
                <p><span >{movieData.Awards}</span></p>
            </div>
            <div className='col-span-full mx-[20%]'>
                <h3>Plot</h3>
                <p className=' '><span >{movieData.Plot}</span></p>
            </div>
            
        </section>
    </main>

    </>
    );
}

export default Details;