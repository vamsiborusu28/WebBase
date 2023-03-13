//import logo from './logo.svg';
// import './App.css';
import { useState } from "react";


function Bio()
{
  return(
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <h1 style={{color:'red'}}>Hey There Welcome !</h1>
    <p style={{color:'#E21717',fontSize:'20px'}}>I am vamsi working as  software engineer at Wipro.</p>
  </div>
  );
}

function Counter(){
  let [count,setCount] =useState(100);
  let [count1,assgnCount]=useState(100);

  function oneUp(){
    setCount(count+1);
  }
  function oneDown(){
    assgnCount(count1-1);
  }
  return (
    <div>
      <button style={{backgroundColor:'black',color:'white',border:'transparent',padding:'7px 10px',}}
              onClick={oneUp}         
      > 
      Count :{count}
      </button>
      <br></br>
      <button style={{backgroundColor:'black',color:'white',border:'transparent',padding:'7px 10px',marginTop:'10px'}} onClick={oneDown}>
        Count :{count1}
      </button>
    </div>
  );

}

function SuperHeros(){
  const [heros,setHero]=useState(['Superman','Batman','Spiderman']);
  const [name,setName]=useState(() => "Hanuman");


  function AddHeros(){
    setHero([...heros,name]);
    setName('');
  }
  return (
    <div>
      {/* SuperHeroes List */}
      <ul>
        {heros.map((h) => { return <li key={h}>{h}</li>})}
      </ul>

    {/* Input Element */}
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}></input>

    {/* Button to Add New Super Heros  */}
    <button onClick={AddHeros}>Add Hero</button>
    </div>
  );
}


function App() {
    return(<>
    <h1 style={{textAlign:'center',color:'#120E43'}}>This is My Personal Website</h1>
    <Bio/>
    <Counter/>
    <SuperHeros/>
    </>
    );
}

export default App;
