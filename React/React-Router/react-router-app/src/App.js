import React from 'react';


import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact'; 
import Footer from './Footer';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Profile from './Profile';
function App(){


    return(
        <Router>
            <nav>
                <ul style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'50px'}}>
                    <li style={{listStyle:'none'}}>
                       <Link to='/'>Home</Link> 
                    </li>
                    <li style={{listStyle:'none'}}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li style={{listStyle:'none'}}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li style={{listStyle:'none'}}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <p>Main Page</p>

            <Footer></Footer>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}>
                <Route path='settings' element={<Settings></Settings>}></Route>
                <Route path='profile' element={<Profile></Profile>}/>
            </Route>
        </Routes>


        </Router>
    );
}

export default App;