import React from 'react';

import Header from "./Header";
import Search  from "./Search";

import {Routes,Route,Link, Outlet} from 'react-router-dom';
import MovieDashboard from './Dashboard/MovieDashboard';
import Contact from './Contact';
function App(){



    return(
    <>
     
      <Header></Header>
      {/* <Search></Search>  */}
      {/* <MovieDashboard></MovieDashboard> */}

      <Routes>
        {/* <Route path='*' element={<App/>}></Route> */}
        <Route path='movies' element={<MovieDashboard></MovieDashboard>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
   
     </>
    
   )
}


export default App;