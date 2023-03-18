
import {useState} from 'react';
import {createContext} from 'react';
import NavBar from './NavBar';
import React from 'react';

export const myContext =createContext();
function App(){
    const [name,setName]=useState('');
    const [color,setColor]=useState('');

    const myName = (event) =>{
        setName(event.target.value);
    }

    const myColor= (event) => {
        setColor(event.target.value);
    }

    return(
        <>
        <myContext.Provider value={{name,color}}>
        <header>
            <h1>This is Main Section</h1>
            <form>
                <label style={{margin:'10px'}}>Name</label>
                <input type='text' value={name} onChange={myName} style={{margin:'10px 10px'}}></input>
                <br ></br>
                <label style={{margin:'10px 10px'}}>Color</label>
                <input type='text' value={color} onChange={myColor} style={{margin:'10px 10px'}}></input>
            </form>

        </header>
        <NavBar></NavBar>
        </myContext.Provider>
        </>
    );
}

export default App;