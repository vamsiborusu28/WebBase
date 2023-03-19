import Nav from './Nav'
import Card from './card';
import { useState } from 'react';
import Prog from './Prog'
function App(){
    const [list,setList]=useState(['HTML','CSS','JS','DOM','REACT','NODE JS']);
    return (
        <>
        <header style={{display:'flex',justifyContent:'center'}}>
            <h1 style={{display:'inline-block'}}>This is Header Component</h1>
            <Nav/>
        </header>
       <section style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'50px'}}>
        <Card></Card> <Card></Card> <Card></Card>
        </section>
        <section>
            <Prog name='vamsi' list={list}></Prog>
        </section>

        </>
    );
}

export default App