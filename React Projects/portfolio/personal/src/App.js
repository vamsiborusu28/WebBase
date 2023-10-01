import React from 'react';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route,Link, NavLink} from 'react-router-dom';

import Home from './Profile/Home'
import About from './Profile/About';
import Contact from './Profile/Contact';
function App(){
    return(

        <>
        <Router>

        <header className='flex justify-around items-center gap-[100px]'>
            <div className='my-[2%]'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi6IO2uV7qeHuT9fOv-GtmJkxoKjYBVdtF89R2iCxSg&s' className="w-[120px] h-[120px] rounded-full">

                </img>
            </div>
            
            <nav className='flex items-center justify-center'>
                <ul className="flex justify-around items-center gap-[50px] text-2xl">
                    <li>
                      <Link to='/home'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            
        </header>

        

            <Routes>
            <Header></Header>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
        </>
    );
}

export default App;