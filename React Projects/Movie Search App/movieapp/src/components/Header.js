

import React from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import MovieDashboard from './Dashboard/MovieDashboard';

function Header(){
    return(
    <>
    <header className="flex flex-wrap text-white bg-black justify-around items-center mb-[20px]">
       <div className="h-[20vh] w-[20vw] ">
           <img src='https://plazaromania.ro/wp-content/uploads/2017/02/logo_movieplex_1024px.jpg' 
           alt='Main Logo' className="h-full w-full rounded-[75%]"></img>
       </div>
       <nav className="flex flex-row flex-wrap">
           <ul className="flex flex-wrap justify-center items-center gap-[2vw]">
               <li className="text-lg hover:bg-red-600  rounded-lg px-[12px] py-[4px] ">
                <Link to='*'>Home</Link>
               </li>
               <li className="text-lg hover:bg-red-600  rounded-lg px-[12px] py-[4px] ">
                <Link to='/search'>Search</Link>
               </li>
               <li className="text-lg hover:bg-red-600  rounded-lg px-[12px] py-[4px] ">
                <Link to='/contact'>Contact</Link>
               </li>
               <li className="text-lg hover:bg-red-600  rounded-lg px-[12px] py-[4px] ">
                <Link to='/movies'>Movies</Link>
               </li>
               <li>
                   <input type='text' className="h-[5vh] rounded-md bg-stone-800 border-none text-red-500 shadow-lg px-[20px]" placeholder='Enter Movie Name'></input>
               </li>
           </ul>
       </nav>
      </header>
      
    </>
    );
}

export default Header;