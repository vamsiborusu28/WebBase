import React, { useState } from 'react';
import Details from './Details';

import { useSelector ,useDispatch} from 'react-redux';
import { addFilm } from '../Redux/features/filmSlice';
export const myContext=React.createContext();
function Search(){
    let [filmData,setData]=useState({});
    const dispatch=useDispatch();
    const getMovieData =async (event) =>{
        event.preventDefault();
        const text=document.querySelector('form>input');
        console.log(text.value);
        if(text.value===''){
            alert('Please Enter Movie Name');
        }

        const movieRespone =await fetch(`https://www.omdbapi.com/?t=${text.value}&apikey=c0731899`);
        // console.log(movieRespone);
        
        const movieData=await movieRespone.json();
        // console.log(movieData);
        if(movieRespone?.response==='False'){
            return;
        }

        setData(movieData);
        dispatch(addFilm(movieData));
    }
    // console.log(filmData);
   
    return(
        
        <>
      
            <form className="flex justify-center items-center h-[20vh] gap-[3vw]">
                <input type='text' placeholder="Enter Movie Name " className="bg-black border-2 border-solid rounded-lg px-[10px] py-[4px] text-white"></input>
                <button className="border-none bg-red-600 px-[25px] py-[8px] text-white font-bolder rounded-lg hover:scale-[1.1]" onClick={getMovieData}>Search</button>
            </form>
            
            <Details data={filmData}></Details>
            
           
        
        </>
        
    );

    
}


export default Search;