
import Effect from "./Effect";
import {useState} from 'react';
import { useEffect } from "react";
import axios from "axios";

function App(){

    const [list,changeList]=useState(['vansi','manideep','saikumar','yaswanth']);
    const [details,updateDetails]=useState({});
    async function getFetchDetails(){
        const response=await axios.get('https://randomuser.me/api/');
        console.log(response);
        const details=response.data.results[0];
        updateDetails(details);
    }
    useEffect(() => {
        getFetchDetails();
    },[list]);
    return(
        <>
        <h1>
            Hello Learn React Hooks UseEffect()
        </h1>
        
        <Effect myname='vamsi' list={list} details={details}/>
        <button onClick={getFetchDetails}>Click Here</button>
        </>
    );
}

export default App;